const PaymentStrategy = require('./PaymentStrategy');

class CashPayment extends PaymentStrategy {
  processPayment(ticket, amount) {
    console.log(`Paid ₹${amount} for ticket ${ticket.ticketId} via Cash`);

    return true;
  }
}

module.exports = CashPayment;
