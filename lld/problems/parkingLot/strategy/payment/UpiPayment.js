class UpiPayment {
  processPayment(ticket, amount) {
    console.log(`Paid ₹${amount} via UPI for ${ticket.ticketId}`);

    return true;
  }
}

module.exports = UpiPayment;
