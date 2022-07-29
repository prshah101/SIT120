// Task 1
let greeting = "Hello";
let greetingLoud = greeting.toUpperCase();

console.log(greeting);
console.log(greetingLoud);

greeting = greeting.concat(" my name is week3!");
console.log(greeting);

let padded = greeting.padEnd(30, "xoxo");
console.log(padded);

let wantName = "         But I would rather be called Bob       ";
let wantName2 = wantName.trim();

console.log(wantName);
console.log(wantName2);

let newName = wantName2[4];
console.log(newName + " am Bob");

// Task 2
const fruits = ["Banana", "Kiwi", " Grape"];
const cost = ["2", "3", " 4"];

console.log(fruits);
console.log("Is 'fruit' an Array? "  + Array.isArray(fruits));
fruits.push("Apple");
console.log(fruits);
const dec_fruit = fruits.splice(0,2); //Beginning from fruit[0], select the first 2 elements
console.log(dec_fruit);

console.log(cost);
console.log("Is 'cost' an Array? "  + Array.isArray(cost));
let outcome = cost.filter(checkPrices);

function checkPrices(cost){
    //Only return elements in the array that have a value over 2
    return cost > 2; 
}

console.log(outcome);
console.log(cost.reverse());

//Task 3
const d = new Date(Date.now());
const d_overseas = new Date('Febuary 20, 1984 22:01:23 GMT+05:00');

console.log(d);
console.log(d.getHours());
console.log(d.getFullYear());
console.log(d.getTime());
console.log(d_overseas.toUTCString());
console.log(subtractHours((d_overseas.getTimezoneOffset()/60), d_overseas).toUTCString());

function subtractHours(numHours, d_overseas) {
    d_overseas.setHours(d_overseas.getHours() - numHours);
    return d_overseas;
  }