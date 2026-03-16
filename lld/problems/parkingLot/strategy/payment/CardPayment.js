class CardPayment {
  processPayment(ticket, amount) {
    console.log(`Paid ₹${amount} for ticket ${ticket.ticketId} via Card.`);

    return true;
  }
}

module.exports = CardPayment;
