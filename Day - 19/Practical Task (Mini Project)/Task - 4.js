//This is a array
let number = [1,2,3,4,5,6];

//forEach() callback funtion 
number.forEach(function(x){
  console.log(x)
})

//map() callb;ack function
let dd = number.map(function(x){
  return x*75 ;
});
console.log(dd);