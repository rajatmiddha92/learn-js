const SplitType = {
  EQUAL: 'EQUAL',
  PERCENT: 'PERCENT',
  EXACT: 'EXACT',
};

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class Expense {
  constructor(id, amount, paidBy, splits, splitType, groupId = null) {
    this.id = id;
    this.amount = amount;
    this.paidBy = paidBy;
    this.splits = splits;
    this.splitType = splitType;
    this.groupId = groupId;
  }
}

class Split {
  constructor(user) {
    this.user = user;
  }
}

class EqualSplit extends Split {
  constructor(user) {
    super(user);
  }
}

class ExactSplit extends Split {
  constructor(user, amount) {
    super(user);
    this.amount = amount;
  }
}

class PercentSplit extends Split {
  constructor(user, percent) {
    super(user);
    this.percent = percent;
  }
}

class GroupService {
  constructor() {
    this.groups = new Map(); // groupId -> Group
  }

  createGroup(id, name, createdBy) {
    const group = new Group(id, name, createdBy);
    group.addMember(createdBy);

    this.groups.set(id, group);
    return group;
  }

  addMember(groupId, user) {
    const group = this.groups.get(groupId);
    if (!group) throw new Error('Group not found');

    group.addMember(user);
  }

  getGroup(groupId) {
    return this.groups.get(groupId);
  }
}

class Group {
  constructor(id, name, createdBy) {
    this.id = id;
    this.name = name;
    this.createdBy = createdBy;
    this.members = new Map(); // userId -> User
    this.expenses = [];
  }

  addMember(user) {
    this.members.set(user.id, user);
  }

  addExpense(expense) {
    this.expenses.push(expense);
  }
}

class SplitStrategy {
  validate(expense) {}
  calculate(expense) {}
}

class EqualSplitStrategy extends SplitStrategy {
  validate(expense) {
    if (expense.splits.length === 0) {
      throw new Error('No users to split');
    }
  }

  calculate(expense) {
    const total = expense.amount;
    const n = expense.splits.length;
    const share = total / n;

    expense.splits.forEach((split) => {
      split.amount = share;
    });
  }
}

class ExactSplitStrategy extends SplitStrategy {
  validate(expense) {
    const sum = expense.splits.reduce((acc, s) => acc + s.amount, 0);
    if (sum !== expense.amount) {
      throw new Error('Exact amounts do not match total');
    }
  }

  calculate(expense) {
    // Already provided
    // not needed exact amount already provided
  }
}

class PercentSplitStrategy extends SplitStrategy {
  validate(expense) {
    const totalPercent = expense.splits.reduce((acc, s) => acc + s.percent, 0);
    if (totalPercent !== 100) {
      throw new Error('Percent must sum to 100');
    }
  }

  calculate(expense) {
    expense.splits.forEach((split) => {
      split.amount = (expense.amount * split.percent) / 100;
    });
  }
}

class SplitFactory {
  static getStrategy(type) {
    switch (type) {
      case SplitType.EQUAL:
        return new EqualSplitStrategy();
      case SplitType.EXACT:
        return new ExactSplitStrategy();
      case SplitType.PERCENT:
        return new PercentSplitStrategy();
      default:
        throw new Error('Invalid split type');
    }
  }
}

class BalanceSheet {
  constructor() {
    this.balances = {}; // {userId: {otherUserId: amount}}
  }

  updateBalance(paidBy, splits) {
    splits.forEach((split) => {
      if (split.user.id === paidBy.id) return;

      this._addBalance(split.user.id, paidBy.id, split.amount);
      this._addBalance(paidBy.id, split.user.id, -split.amount);
    });
  }

  settleBalance(fromUserId, toUserId, amount) {
    fromUserId = fromUserId.id;
    toUserId = toUserId.id;
    this.balances[fromUserId][toUserId] -= amount;
    this.balances[toUserId][fromUserId] += amount;
  }

  _addBalance(user1, user2, amount) {
    if (!this.balances[user1]) this.balances[user1] = {};
    if (!this.balances[user1][user2]) this.balances[user1][user2] = 0;
    this.balances[user1][user2] += amount;
  }

  showBalances() {
    for (let u1 in this.balances) {
      for (let u2 in this.balances[u1]) {
        const amount = this.balances[u1][u2];
        if (amount > 0) {
          console.log(`${u1} owes ${u2}: ${amount}`);
        }
      }
    }
  }
}

class ExpenseService {
  constructor(balanceSheet, groupService) {
    this.balanceSheet = balanceSheet;
    this.groupService = groupService;
  }

  addExpense(expense) {
    const strategy = SplitFactory.getStrategy(expense.splitType);

    strategy.validate(expense);
    // 🔹 If group expense → validate members
    if (expense.groupId) {
      const group = this.groupService.getGroup(expense.groupId);

      expense.splits.forEach((split) => {
        if (!group.members.has(split.user.id)) {
          throw new Error('User not in group');
        }
      });

      group.addExpense(expense);
    }

    strategy.calculate(expense);

    this.balanceSheet.updateBalance(expense.paidBy, expense.splits);
  }
}

const u1 = new User(1, 'A');
const u2 = new User(2, 'B');
const u3 = new User(3, 'C');

const balanceSheet = new BalanceSheet();
const groupService = new GroupService();
const expenseService = new ExpenseService(balanceSheet, groupService);

// ✅ Create Group
const group = groupService.createGroup(1, 'Trip', u1);

// ✅ Add members
groupService.addMember(1, u2);
groupService.addMember(1, u3);

// ✅ Expense 1 (A paid 300 in group)
const expense1Splits = [new EqualSplit(u1), new EqualSplit(u2), new EqualSplit(u3)];

const expense1 = new Expense(
  1,
  300,
  u1,
  expense1Splits,
  SplitType.EQUAL,
  group.id // ✅ attach group
);

expenseService.addExpense(expense1);

// ✅ Expense 2 (C paid 900 in group)
const expense2Splits = [
  new PercentSplit(u1, 50),
  new PercentSplit(u2, 30),
  new PercentSplit(u3, 20),
];

const expense2 = new Expense(2, 9000, u3, expense2Splits, SplitType.PERCENT, group.id);

expenseService.addExpense(expense2);

// ✅ Show balances
balanceSheet.showBalances();
balanceSheet.settleBalance(u2, u1, 50);
balanceSheet.showBalances();


//p