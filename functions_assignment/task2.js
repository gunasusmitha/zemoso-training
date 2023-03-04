/*An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. 
For the arguments Roger and Waters, the function returns ‘RW’.*/


/*
//normal declaration function
function func(first,last) {
  return first[0]+last[0];
}

console.log(func("Roger","Waters"))
*/

var myfunc = (firstname,lastname)=>firstname[0]+lastname[0];

console.log(myfunc("Roger","Waters"))

 