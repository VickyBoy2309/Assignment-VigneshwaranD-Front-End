class Student {
  constructor(Name, Rollno, Depo) {
    this.Name  = Name;
    this.Rollno = Rollno;
    this.Depo = Depo;
  }
  display() {
    console.log("Student Details:");
    console.log(`Name : ${this.Name}`);
    console.log(`Roll No : ${this.Rollno}`);
    console.log(`Department : ${this.Depo}`);
    console.log(`--------------------------------------`)
  }
}

const Student1 = new Student("Vigneshwaran D", 101 , "BCA AI & DS");
const Student2 = new Student("Tony Stark", 102 , "M.Tech CS");
const Student3 = new Student("Bruce Banner", 103 , "B.Sc Chemistry");

Student1.display();
Student2.display();
Student3.display();