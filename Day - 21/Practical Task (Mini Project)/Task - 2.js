const AgeChecker = [
  {Name : "Vicky", Age : 20},
  {Name : "Steve", Age : 33},
  {Name : "Ele", Age : 14},
  {Name : "Max", Age : 25},
  {Name : "Nancy", Age : 30},
  {Name : "Robin", Age : 17},
];

const adults = AgeChecker
.filter(Name => Name.Age >= 18);
console.log(adults)