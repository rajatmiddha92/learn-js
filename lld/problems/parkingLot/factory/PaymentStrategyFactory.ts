import { PaymentMode } from '../enums/PaymentMode';
import { CashPayment } from '../strategy/payment/CashPayment';
import { CardPayment } from '../strategy/payment/CardPayment';
import { PaymentStrategy } from '../strategy/payment/PaymentStrategy';
import { UpiPayment } from '../strategy/payment/UpiPayment';

export class PaymentStrategyFactory {
  static get(mode: PaymentMode): PaymentStrategy {
    switch (mode) {
      case PaymentMode.CASH:
        return new CashPayment();
      case PaymentMode.UPI:
        return new UpiPayment();
      case PaymentMode.CARD:
        return new CardPayment();
      default:
        throw new Error('Invalid payment mode');
    }
  }
}
