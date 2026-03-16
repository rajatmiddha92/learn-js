import { PaymentStrategy } from '../strategy/payment/PaymentStrategy';
import { Ticket } from '../model/Ticket';
import { PaymentStatus } from '../enums/PaymentStatus';

export class PaymentProcessor {
  constructor(private strategy: PaymentStrategy) {}

  pay(ticket: Ticket, amount: number): boolean {
    const success = this.strategy.processPayment(ticket, amount);

    ticket.paymentStatus = success ? PaymentStatus.SUCCESS : PaymentStatus.FAILED;

    return success;
  }
}
