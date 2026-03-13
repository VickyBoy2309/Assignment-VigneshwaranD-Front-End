let Numbers = [10,20,30,40,50,60,70,80,90];
let NumberGreaterThan = Numbers.filter(function (num) {
  return num > 50;
});

console.log(NumberGreaterThan);