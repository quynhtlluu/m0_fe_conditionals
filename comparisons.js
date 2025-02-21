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
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("is numberStudents less than or equal to 21?", numberStudents <= 21);
// this should log: true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
//This line of code will print out a statement with the word "true".
//This result is due to 4 is not less than 9 in value.

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
//This line of code will print out a statement with the word "false".
//A comparison is made between the number 4 and the value of `books` (which is 3).
//This result is due to `books` is assigned to a value of 3 at first and 4 is greater than 3.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
//This line of code will print out a statement with the word "true".
//A comparison is made between the value of `friends` (which is 6) and the value of `siblings` (which is 2).
//This result is due to the value of `friends` is 6 and the value of `siblings` is 2.
//6 is greater than 2 in value.

var attendees = 9;
var meals = 8;
console.log(attendees != meals);
// YOU DO: Explain.
//This line of code will print out a statement with the word "true".
//A claim is made between the value of `attendees` (which is 9) and the value of `meals` (which is 8), suggesting that they have different values.
//This result is due to the value of `attendees` being different from the value of `meals.
//It is true that the values for both of these variables are not the same.

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
console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
var isPuppy = true;
console.log(lovesToPlay && isPuppy);

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
//My final line of code evaluated to `true`. I think is this because the values of both of the variables
//are `true`. With using an `&&` operator, both bathriables ahve to be `true`
//in order to have the result be `true` from performing the operation.
