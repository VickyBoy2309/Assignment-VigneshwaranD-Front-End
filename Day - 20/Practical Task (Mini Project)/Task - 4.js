class Shape {
  constructor(Name) {
    this.Name = Name;
  }
  describe() {
    console.log(`This is a ${this.Name}`);
  }
}

class Circle extends Shape {
  constructor(Radius) {
    super("Circle");
    this.Radius = Radius;
  }
  calculateArea() {
    return Math.PI * this.Radius * this.Radius;
  }
}

const Circle1 = new Circle(7);

Circle1.describe();
console.log(`Area of the circle :`,Circle1.calculateArea().toFixed(2));