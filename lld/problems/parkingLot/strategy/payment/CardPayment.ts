import { PaymentStrategy } from './PaymentStrategy';
import { Ticket } from '../../model/Ticket';

export class CardPayment implements PaymentStrategy {
  processPayment(ticket: Ticket, amount: number): boolean {
    console.log(`Paid ₹${amount} for ticket ${ticket.ticketId} via Card.`);

    return true;
  }
}
