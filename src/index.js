class SmartCalculator {
  constructor(initialValue) {
    this.memory = `${initialValue}`;
    this.valueOf = function(){return new Function('return ' + this.memory)()};
  }

  add(number) {
    this.memory += `+${number}`;
    return this
  }
  
  subtract(number) {
    this.memory += `-${number}`;
    return this
  }

  multiply(number) {
    this.memory += `*${number}`;
    return this
  }

  devide(number) {
    this.memory += `/${number}`;
    return this
  }

  pow(number) {
    this.memory += `**${number}`;
    return this
  }
}

module.exports = SmartCalculator;
