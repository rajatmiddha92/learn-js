class Notification {
  constructor(message, type) {
    this.message = message;
    this.type = type;
  }
}

class NotificationChannel {
  send(notification) {
    throw new Error('send() must be implemented');
  }
}

class EmailNotifier extends NotificationChannel {
  send(notification) {
    console.log(`Email: ${notification.message}`);
  }
}

class SMSNotifier extends NotificationChannel {
  send(notification) {
    console.log(`SMS: ${notification.message}`);
  }
}

class PushNotifier extends NotificationChannel {
  send(notification) {
    console.log(`Push: ${notification.message}`);
  }
}

class ConsoleNotifier extends NotificationChannel {
  send(notification) {
    console.log(`Console: ${notification.message}`);
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.channels = [];
  }

  addChannel(channel) {
    this.channels.push(channel);
  }

  update(notification) {
    for (let channel of this.channels) {
      channel.send(notification);
    }
  }
}

class NotificationSystem {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify(notification) {
    for (let observer of this.observers) {
      observer.update(notification);
    }
  }
}

const user1 = new User('A');
user1.addChannel(new EmailNotifier());
user1.addChannel(new SMSNotifier());

const user2 = new User('B');
user2.addChannel(new PushNotifier());

const system = new NotificationSystem();
system.addObserver(user1);
system.addObserver(user2);

const notif = new Notification('Order Placed!', 'INFO');

system.notify(notif);

// op
// Email: Order Placed!
// SMS: Order Placed!
// Push: Order Placed!
