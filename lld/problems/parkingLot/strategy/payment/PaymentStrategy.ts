import { Ticket } from '../../model/Ticket';

export interface PaymentStrategy {
  processPayment(ticket: Ticket, amount: number): boolean;
}
