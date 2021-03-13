class Settler {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.age = obj.age;
    this.status = 'healthy'
    this.ailments = [];
    if (obj.nationality === undefined)  {
      this.nationality = 'unknown'
    } else {
      this.nationality = obj.nationality;
    }
  }

  experienceDistress(distress)  {
    this.ailments.push(distress)
    if (this.ailments.length === 1) {
      this.status = 'fair'
    } else if (this.ailments.length === 2) {
      this.status = 'poor'
    }
  }
}

module.exports = Settler;
