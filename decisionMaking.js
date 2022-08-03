// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
  "You stay with the bear and become it's best friend!";
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.
// At the beginning of this code, we have defined a condition in relation to the variable `doorChoice` for the program to run.
// The condition states that if `doorChoice` is strictly equal to 1, the other variable `bearClothing` will be assigned to the string "hat".
// If the condition is not met or is false, the other variable `bearClothing` will be assigned to the string "scarf".

// 2. What variable has a new value assigned to it after the first if statement executes?
// var bearClothing

// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// "scarf"

// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.
// At the beginning of this code, we have defined a condition in relation to the variable `bearChoice` for the program to run.
// The condition states that if `bearChoice` is strictly equal to 1, the program will run and print out a statement about a bear and a secret passage. This statement will also reference the value determined earlier for bearClothing.
// The condition states that if `bearChoice` is strictly equal to 2 instead, the program will run and print out a statement about a bear crying. This statement will also reference the value determined earlier for bearClothing.
// The condition states that if `bearChoice` is strictly equal to 3 instead, the program will run and print out a statement about running to the next room.
// If none of the conditions above are met or are false, the program will run and print out a statement about staying with a bear and becoming its friend.

// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
// The condition states that if `bearChoice` is strictly equal to 3, the program will run and print out a statement about running to the next room.

// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
// The condition states that if `bearChoice` is strictly equal to 2, the program will run and print out a statement about a bear crying. This statement will also reference the value determined earlier for bearClothing--which is a hat in this case.

// 7. What is your favorite ending?
//I like the ending where I become friends with the bear.
