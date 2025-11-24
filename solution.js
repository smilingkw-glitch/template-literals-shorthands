// PART A: Template Literals
const username = "Your Name Here";
const course = "Your Course Name";
console.log(`Hello, welcome to the ${course}!`);

// PART B: Object Shorthand
const name = "Sam";
const age = 21;
const student = {
  name: name,
  age: age,
  greet: function() {
    console.log("Hello");
  }
};

//PART C: Arrow Function Shorthand
const getFullName = (first, last) => `${first} ${last}`;
