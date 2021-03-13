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
}

module.exports = Settler;
