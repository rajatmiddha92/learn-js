const PaymentMode = require('../enums/PaymentMode');
const CashPayment = require('../strategy/payment/CashPayment');
const CardPayment = require('../strategy/payment/CardPayment');
const UpiPayment = require('../strategy/payment/UpiPayment');

class PaymentStrategyFactory {
  static get(mode) {
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

module.exports = PaymentStrategyFactory;
