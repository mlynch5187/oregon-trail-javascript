class Wagon {
  constructor(obj) {
    obj = obj || {};
    this.title = obj.name;
    this.food = obj.food;
    this.ammunition = obj.ammunition;
    if (obj.wheels === undefined)  {
      this.wheels = [];
    } else {
      this.wheels = obj.wheels;
    }
    if (obj.axles === undefined)  {
      this.axles = [];
    } else {
      this.axles = obj.axles;
    }
    if (obj.oxen === undefined)  {
      this.oxen = [];
    } else {
      this.oxen = obj.oxen;
    }
    if (obj.yokes === undefined)  {
      this.yokes = [];
    } else {
      this.yokes = obj.yokes;
    }
  }
}

module.exports = Wagon;
