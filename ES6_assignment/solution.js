const printName = (name) => "Hi "+name;
//console.log(printName("Ramya"));

const printBill = (name, bill) => `Hi ${name}, please pay: ${bill}`;
//console.log(printBill("Ramya",900));

const person = {
    name: "Noam Chomsky",
    age: 92,
}
let {name,age}=person;
console.log(name);
console.log(age);
// let {name,age,place="Vizag"}=person;
// console.log(place,person)






