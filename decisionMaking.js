// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 3;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log(puts "You see a bear putting on a " + bearClothing);
console.log(puts "It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log(puts "1. Offer your own to the bear?");
console.log(puts "2. Point it out to the bear?");
console.log(puts "3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log(
  "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";)
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
  "You stay with the bear and become it's best friend!";
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.
// - Between lines 12 and 16, the if statement suggests the value 1 is chosen, then the option "hat" will be the chosen "true" value for the second portion of the story. However, if option 1 is not chosen, then the "scarf" option following the else statement will be the "true" value for the next portion of code

// 2. What variable has a new value assigned to it after the first if statement executes?
// - The "bearClothing" variable changes according to the option chosen

// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// - If the variable changes to 3, the value of bearClothing, since it is an open string, would be "Scarf" as any other value other than 1 would render that condition to be true

// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.
//

// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
// 7. What is your favorite ending?
// The ending where I stay with the bear and become it's best friend!
