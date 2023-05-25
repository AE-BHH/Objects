// 1. Given the following code, how can you access the name of the person?
/*
let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

console.log(person.name);

*/

// 3.
//  Use object literal syntax (e.g., `{ key: value, ... }` notation) to create an object that behaves as an array in a for statement. The object should contain at least 3 elements. You should place your code between the braces in the let statement:


let myArray = {
        name: "Abbas", 
        lastName: "Ehsani",
        contact: "12345678",
        address: "kjdsfiejlsdjfkdjlfds",
        length: 2
};

// console.log(myArray.length);

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

// console.log(myArray.info);