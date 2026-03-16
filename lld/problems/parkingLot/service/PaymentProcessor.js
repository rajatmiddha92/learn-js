const PaymentStatus = require('../enums/PaymentStatus');

class PaymentProcessor {
  constructor(strategy) {
    this.strategy = strategy;
  }

  pay(ticket, amount) {
    const success = this.strategy.processPayment(ticket, amount);

    if (success) {
      ticket.paymentStatus = PaymentStatus.SUCCESS;
    } else {
      ticket.paymentStatus = PaymentStatus.FAILED;
    }

    return success;
  }
}

module.exports = PaymentProcessor;
