const PaymentStrategy = require('./PaymentStrategy');

class CashPayment extends PaymentStrategy {
  processPayment(ticket, amount) {
    console.log(`Paid ₹${amount} via Cash for ${ticket.ticketId}`);

    return true;
  }
}

module.exports = CashPayment;
