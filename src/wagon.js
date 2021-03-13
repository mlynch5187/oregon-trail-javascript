class Wagon {
  constructor(obj) {
    obj = obj || {};
    this.title = obj.name;
    if (obj.wheels === undefined)  {
      this.wheels = [];
    } else {
      this.wheels = obj.wheels;
    }
  }
}

module.exports = Wagon;
