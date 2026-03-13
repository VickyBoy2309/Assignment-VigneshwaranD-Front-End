function Student (Name, Course) {
  this.Name = Name;
  this.Course = Course;
}
const Student1 = new Student(`Vigneshwaran D`,`CS`);
const Student2 = new Student(`Tony Stark`, `IT`);

Student.prototype.intro = function () {
  console.log(`Hi!! I'm ${this.Name} & i'm Studying ${this.Course}`)
}
Student1.intro();
Student2.intro();