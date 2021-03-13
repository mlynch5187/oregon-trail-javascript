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
    if (this.status !== 'dead')  {
      this.ailments.push(distress)
      if (this.ailments.length === 1) {
        this.status = 'fair'
      } else if (this.ailments.length === 2) {
        this.status = 'poor'
      } else if (this.ailments.length === 3) {
        this.status = 'dead'
      }
    }
  }

  heal()  {
    if (this.status !== 'dead')  {
      this.status = 'healthy'
      this.ailments = [];
    } else {      
      return `Sorry, we can\'t heal a corpse. ${this.name} needs a proper burial!`
    }
  }
}

module.exports = Settler;
