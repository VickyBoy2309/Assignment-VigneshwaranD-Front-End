const Numbers = [10,20,30,40];
const Total = Numbers.reduce((sum, num) => {
  return sum + num;
},0);
console.log(Total);