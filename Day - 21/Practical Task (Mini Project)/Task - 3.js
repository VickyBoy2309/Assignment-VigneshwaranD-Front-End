const Students = [
  ["Vicky", 100],
  ["Steve", 99],
  ["Ele", 89],
  ["Max", 99],
  ["Nancy", -11],
  ["Robin", 69],
]

Students.forEach(Students => {
  const Name = Students[0];
  const Marks = Students[1];
  console.log(`Name : ${Name}, Marks : ${Marks}`)
})