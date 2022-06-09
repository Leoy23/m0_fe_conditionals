// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);
// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);
// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("Is numberStudents great than or equal to 20?", numberStudents >= 20);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true

console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);
// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// The above comparison is determining that 4 is less than 9; the comparison will evaluate to true


var books = 3;
console.log(4 < books);
// The variable "books" has been declared to equal 3, and the comparison is determing if 4 is less than the books variable of 3; this comparison will evaluate to be false as 4 is not less than 3


var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// There are two declared variables for "friends" with a value of 6 and "siblings" with a value of 2; the comparison is wondering if friends is greater than siblings; the comparison would evaluate to be true.


var attendees = 9;
var meals = 8;
console.log(attendees != meals);
// The two variables, "attendees" with a value of 9 and "meals" with a value of 8, the comparison is asking if attendees does not strictly equal meals and that would be false


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesDogPark && lovesTreats); false

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark); false

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);true

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && isAPuppy);
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: I received an error due to "isAPuppy" not being defined correctly above similar to the other variables. When ran, the terminal doesn't know which variable I am alluding to and cannot evaluate completely
