split_type = {
  "EQUAL": "EQUAL",
  "PERCENT": "PERCENT",
  "EXACT": "EXACT"
}
class BalanceSheet:
  def __init__(self):
    self.balances = {}
  
  def addBalance(self,fromUser,toUser,amount):
    if(fromUser not in self.balances):
       self.balances[fromUser] = {};
       
    if(toUser not in self.balances[fromUser]):
       self.balances[fromUser][toUser] = 0;
       
    self.balances[fromUser][toUser] += amount   
  
  def updateBalance(self,expense):
    for splits in expense.splits:
      if(expense.paidBy.id != splits.user.id):
         self.addBalance(expense.paidBy.name,splits.user.name,splits.amount)
         self.addBalance(splits.user.name,expense.paidBy.name,-splits.amount)
         
  def printBalance(self):
    for i in self.balances:
      for j in self.balances[i]:
        amount = self.balances[i][j]
        if(amount > 0):
          print(f"{i} owes {j}: Rs {amount}")
        

class SplitStrategyFactory:
  
  def getSplitStartegyType(self,type):
    match type:
      case "EQUAL":
        return EqualSplitStrategy();
      case "PERCENT": 
        return PercentageSplitStrategy();
      case "EXACT": 
        return ExactSplitStrategy();
      case _: 
        raise Exception("Split Type not exist")

class SplitStrategy:
  
    
  def validateExpense(self,expense):
    pass
  
  def calculateExpense(self,expense):  
    pass
    
class EqualSplitStrategy(SplitStrategy):
 
 def validateExpense(self,expense):
    if(len(expense.splits) == 0):
       raise Exception("Splits cannot be empty")
   
 def calculateExpense(self,expense):
    total_users = len(expense.splits)
    amt_per_user = round(expense.amount / total_users,2)
    for splits in expense.splits:
      splits.amount = amt_per_user
      
class PercentageSplitStrategy(SplitStrategy):

    def validateExpense(self, expense):
        total = 0
        for split in expense.splits:
            total += split.percent

        if total != 100:
            raise Exception("percent is not summing up to 100")

    def calculateExpense(self, expense):
        for split in expense.splits:
            split.amount = (split.percent * expense.amount) / 100 
    
class ExactSplitStrategy(SplitStrategy):
 
 def validateExpense(self,expense):
    sum = 0
    for splits in expense.splits:
       sum += splits.amount 
    if(sum != expense.amount):
      raise Exception("total is not correct")
   
   
 def calculateExpense(self,expense):
    pass
      
class ExpenseService:
  def __init__(self,group_service,balance_sheet):
    self.group_service = group_service
    self.balance_sheet = balance_sheet
    
  def addExpense(self,expense):
    group_exist = self.group_service.getGroupById(expense.groupId)
    
    factory = SplitStrategyFactory()
    strategy = factory.getSplitStartegyType(expense.split_type) 
    
    strategy.validateExpense(expense)
    strategy.calculateExpense(expense)
    if(group_exist != None):
      group_exist.addExpense(expense)
      self.balance_sheet.updateBalance(expense)
      
    
    
    
class Expense:
  def __init__(self,id,paidBy,amount,split_type,splits,groupId):
    self.id = id;
    self.paidBy = paidBy;
    self.amount = amount;
    self.split_type = split_type;
    self.splits = splits;
    self.groupId = groupId

class Split:
  def __init__(self,user):
    self.user = user
    
class EqualSplit(Split):
  def __init__(self,user):
    super().__init__(user);
    
class PercentSplit(Split):
  def __init__(self,user,percent):
    super().__init__(user);
    self.percent = percent;
    
class ExactSplit(Split):
  def __init__(self,user,amount):
    super().__init__(user)
    self.amount = amount;   
  
class User:
  def __init__(self,id,name):
    self.id = id;
    self.name = name;
  
  def __str__(self):
    return f"User(id={self.id}, name={self.name})"  

class Group:
  def __init__(self,name,id):
    self.id = id;
    self.name = name;
    self.expenses = []
    self.users = {}
    
    
  def __str__(self):
    return f"(name:{self.name},id:{self.id})"
  
  def addUser(self,user):
    self.users[user.id] = user
    
  def addExpense(self,expense):
    self.expenses.append(expense)
    
  def viewUsers(self):
    for i in self.users:
      print("User:", self.users[i])

class GroupServcie:
  def __init__(self):
    self.groups = {}
    
  def addGroup(self,grp):
    self.groups[grp.id] = grp
    
  def getGroupById(self,id):
    return self.groups.get(id)

u1 = User(1,"Rajat")
u2 = User(2,"Neelesh")
u3 = User(3,"Rita")
group = Group("Goa",1)
group_service = GroupServcie()
group_service.addGroup(group)
group.addUser(u1)
group.addUser(u2)
group.addUser(u3)
group.viewUsers()
expense_one = Expense(1,u1,1000,split_type["EQUAL"],[EqualSplit(u1),EqualSplit(u2),EqualSplit(u3)],1)
balance_sheet = BalanceSheet()
expense_service = ExpenseService(group_service,balance_sheet)
expense_service.addExpense(expense_one)
balance_sheet.printBalance()