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
    if (obj.clothes === undefined)  {
      this.clothes = [];
    } else {
      this.clothes = obj.clothes;
    }
  }

  addPart(part) {
    if (part.type = 'wheel')  {
      this.wheels.push(part)
    }
    if (part.type = 'axle')  {
      this.axles.push(part)
    }
    if (part.type = 'ox')  {
      this.oxen.push(part)
    }
    if (part.type = 'yoke')  {
      this.yokes.push(part)
    }
  }
}

module.exports = Wagon;
