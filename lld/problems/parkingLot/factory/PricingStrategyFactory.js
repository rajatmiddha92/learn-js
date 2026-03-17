const PricingStrategyType = require('../enums/PricingStrategyType');
const EventBasedPricing = require('../strategy/pricing/EventBasedPricing');
const TimeBasedPricing = require('../strategy/pricing/TimeBasedPricing');

class PricingStrategyFactory {
  static get(type) {
    switch (type) {
      case 'TIME_BASED':
        return new TimeBasedPricing();

      case 'EVENT_BASED':
        return new EventBasedPricing();

      default:
        throw new Error('Invalid Pricing Strategy Type');
    }
  }
}

module.exports = PricingStrategyFactory;
