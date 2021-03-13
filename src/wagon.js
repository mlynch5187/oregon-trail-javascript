class Wagon {
  constructor(obj) {
    obj = obj || {};
    this.title = obj.name;
    this.wheels = [];
  }
}

module.exports = Wagon;
