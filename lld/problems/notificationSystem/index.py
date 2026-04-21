from abc import ABC, abstractmethod

# Notification Object
class Notification:
    def __init__(self, message, type):
        self.message = message
        self.type = type


# Strategy Interface
class NotificationChannel(ABC):
    @abstractmethod
    def send(self, notification):
        pass


# Concrete Strategies
class EmailNotifier(NotificationChannel):
    def send(self, notification):
        print(f"Email: {notification.message}")


class SMSNotifier(NotificationChannel):
    def send(self, notification):
        print(f"SMS: {notification.message}")


class PushNotifier(NotificationChannel):
    def send(self, notification):
        print(f"Push: {notification.message}")


class ConsoleNotifier(NotificationChannel):
    def send(self, notification):
        print(f"Console: {notification.message}")


# Observer Interface
class Observer(ABC):
    @abstractmethod
    def update(self, notification):
        pass


# Concrete Observer
class User(Observer):
    def __init__(self, name):
        self.name = name
        self.channels = []

    def add_channel(self, channel):
        self.channels.append(channel)

    def update(self, notification):
        for channel in self.channels:
            channel.send(notification)


# Publisher
class NotificationSystem:
    def __init__(self):
        self.observers = []

    def addObserver(self, obs):
        self.observers.append(obs)

    def removeObserver(self, obs):
        self.observers.remove(obs)

    def notify(self, notification):
        for observer in self.observers:
            observer.update(notification)
            
user1 = User("A")
user1.add_channel(EmailNotifier())
user1.add_channel(SMSNotifier())

user2 = User("B")
user2.add_channel(PushNotifier())

system = NotificationSystem()
system.addObserver(user1)
system.addObserver(user2)

notif = Notification("Order Placed!", "INFO")
system.notify(notif)            