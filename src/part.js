class Part  {
  constructor(type) {
    this.type = type;
    this.broken = false;
    this.repairs = 0
  }

  break() {
    this.broken = true;
  }

  repair()  {
    if (this.repairs === 0) {
      this.repairs += 1;
      this.broken = false;
    } else {
      return `This ${this.type} has seen better days, we\'ll need a brand new one!`
    }
  }
}

module.exports = Part;
