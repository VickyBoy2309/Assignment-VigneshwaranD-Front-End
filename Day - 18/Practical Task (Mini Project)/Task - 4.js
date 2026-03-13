let name = "Vicky_Boy_23😉`";
let marks = 100;

let grade;
let remark;

if (marks < 0 || marks > 100) {
  grade = "Invalid";
  remark = "Marks must be between 0 and 100";
} else if (marks >= 90) {
  grade = "A";
  remark = "Excellent performance";
} else if (marks >= 75) {
  grade = "B";
  remark = "Very good";
} else if (marks >= 50) {
  grade = "C";
  remark = "Good, needs improvement";
} else {
  grade = "Fail";
  remark = "Better luck next time";
}

console.log("Student Name:", name);
console.log("Marks:", marks);
console.log("Grade:", grade);
console.log("Remark:", remark);