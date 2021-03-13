class Settler {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.age = obj.age;
    this.nationality = 'unknown'
  }
}

module.exports = Settler;
