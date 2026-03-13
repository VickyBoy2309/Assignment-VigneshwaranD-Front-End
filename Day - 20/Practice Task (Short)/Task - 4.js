class Employee {
  constructor(Name, Salary) {
    this.Name = Name,
    this.Salary = Salary
  }

  displayInfo() {
    console.log(`${this.Name}, ${this.Salary}`);
  }
}

const Emp = new Employee("Vigneshwaran D", 100000);

Emp.displayInfo()