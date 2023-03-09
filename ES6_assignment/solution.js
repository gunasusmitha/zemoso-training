const printName = (name) => "Hi "+name;
//console.log(printName("Ramya"));
const printBill = (name, bill) => "Hi " + name + ", please pay: " + bill;
//console.log(printBill("Ramya",900));
const person = {
    Name: "Noam Chomsky",
    age: 92,
    set setname(Name) {
       this.Name = Name;
    },
    set setage(age) {
       this.age = age;
    },
    get getname() {
       return this.Name;
    },
    get getage() {
       return this.age;
    }
}

let Name = person.Name;
let age = person.age;
console.log(Name);
console.log(age);
// person.setage=26;
// console.log(person.getage);



