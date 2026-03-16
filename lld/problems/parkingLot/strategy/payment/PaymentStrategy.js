class PaymentStrategy {
  processPayment(ticket, amount) {
    throw new Error('processPayment() must be implemented');
  }
}

module.exports = PaymentStrategy;
