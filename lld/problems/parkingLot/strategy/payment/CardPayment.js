import PaymentStrategy from './PaymentStrategy';

class CardPayment extends PaymentStrategy {
  processPayment(ticket, amount) {
    console.log(`Paid ₹${amount} for ticket ${ticket.ticketId} via Card.`);

    return true;
  }
}

module.exports = CardPayment;
