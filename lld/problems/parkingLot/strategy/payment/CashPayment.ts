import { PaymentStrategy } from './PaymentStrategy';
import { Ticket } from '../../model/Ticket';

export class CashPayment implements PaymentStrategy {
  processPayment(ticket: Ticket, amount: number): boolean {
    console.log(`Paid ₹${amount} via Cash for ${ticket.ticketId}`);

    return true;
  }
}
