class Employees {
  constructor(Name ,Salary) {
    this.Name = Name;
    this.Salary = Salary;
  }
  displayInfo() {
    console.log("The Employees Details : ")
    console.log(`Name : ${this.Name} `)
    console.log(`Salary : ${this.Salary}`)
  }
}

class Manager extends Employees {
  constructor(Name, Salary, Department) {
    super(Name, Salary, Department)
    this.Department = Department;
  }
  displayInfo() { 
    super.displayInfo();
    console.log(`Department : ${this.Department}`)
  }
}

const Manager1 = new Manager("Vigneshwaran D", 100000, "IT")

Manager1.displayInfo()