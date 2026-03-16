class PricingStrategy {
  calculateFee(type, entryTime, exitTime) {
    throw new Error('calculateFee() must be implemented');
  }
}

module.exports = PricingStrategy;
