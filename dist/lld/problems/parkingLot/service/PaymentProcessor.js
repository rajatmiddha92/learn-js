import { PaymentStatus } from '../enums/PaymentStatus';
export class PaymentProcessor {
    constructor(strategy) {
        this.strategy = strategy;
    }
    pay(ticket, amount) {
        const success = this.strategy.processPayment(ticket, amount);
        ticket.paymentStatus = success ? PaymentStatus.SUCCESS : PaymentStatus.FAILED;
        return success;
    }
}
