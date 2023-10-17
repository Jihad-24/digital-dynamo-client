# 1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined

Answer : B: ReferenceError: greetign is not defined 
         assigned an empty object to a variable called greetign. As a result, greetign is not defined, and will encounter a ReferenceError when you try to log it.

# 2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3

Answer: C: "12"
        In the `sum` function call `sum(1, "2")`, JavaScript  converts the number 1 to a string and then performs string concatenation. So, it combines "1" and "2" to create the string "12" 

# 3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer: A: ['🍕', '🍫', '🥑', '🍔']
        The info object initially has a property favoriteFood set to "🍕". However, when you reassign info.favoriteFood to "🍝," it only changes the property value in the info object and doesn't affect the original food array. Therefore, when you log the food array, it remains unchanged.

# 4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

Answer: B: Hi there, undefined
        In the sayHi function, when you call sayHi() without providing an argument, the name parameter inside the function remains undefined. When you use this undefined value in the template string, it will result in "Hi there, undefined" being returned 

# 5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4

Answer: C: 3
         In this code, i have an array called nums with four numbers. count is set to 0. Then, i go through each number in the array using forEach, and for each number that is not zero, i increase count by 1. After going through all the numbers, count ends up being 3.