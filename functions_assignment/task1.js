//Write a program to demonstrate how a function can be passed as a parameter to another function.

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function math(operation, a, b) {
  return operation(a, b);
}

console.log(math(add, 5, 3)); 
console.log(math(sub, 5, 3)); 
