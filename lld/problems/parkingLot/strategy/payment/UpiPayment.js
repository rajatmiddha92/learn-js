const PaymentStrategy = require('./PaymentStrategy');
class UpiPayment extends PaymentStrategy {
  processPayment(ticket, amount) {
    console.log(`Paid ₹${amount} via UPI for ${ticket.ticketId}`);

    return true;
  }
}

module.exports = UpiPayment;
