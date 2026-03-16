class CashPayment {
  processPayment(ticket, amount) {
    console.log(`Paid ₹${amount} via Cash for ${ticket.ticketId}`);

    return true;
  }
}

module.exports = CashPayment;
