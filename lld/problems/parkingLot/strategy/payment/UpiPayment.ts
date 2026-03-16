import { PaymentStrategy } from './PaymentStrategy';
import { Ticket } from '../../model/Ticket';

export class UpiPayment implements PaymentStrategy {
  processPayment(ticket: Ticket, amount: number): boolean {
    console.log(`Paid ₹${amount} via UPI for ${ticket.ticketId}`);

    return true;
  }
}
