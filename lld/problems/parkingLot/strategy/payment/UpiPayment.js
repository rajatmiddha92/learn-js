const PaymentStrategy = require('./PaymentStrategy');
class UpiPayment extends PaymentStrategy {
  processPayment(ticket, amount) {
    console.log(`Paid ₹${amount} for ticket ${ticket.ticketId} via UPI`);

    return true;
  }
}

module.exports = UpiPayment;
