const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
console.log("while loop")
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
console.log("************************")
// Write a for loop that prints out the contents of ingredients:
console.log("for loop")
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
console.log("************************")
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("ingredients backwards")
for (let i = ingredients.length-1; i>=0 ; i--) {
  console.log(ingredients[i]);
}