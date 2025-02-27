//console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Juan";
console.log("The driver's name is " + hacker1);

let hacker2 = "Matias";

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1
// WITHOUT LOOPS: console.log(hacker1.toUpperCase().split("").join(" "));
let inCapitalsHacker1 = "";
for (let i = 0; i < hacker1.length; i++) {
  inCapitalsHacker1 += hacker1[i];
}
console.log(inCapitalsHacker1.toUpperCase().split("").join(" "));

//3.2
// WITHOUT LOOPS: console.log(hacker2.split("").reverse().join(""));
let backwardsHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  backwardsHacker2 += hacker2[i];
}
console.log(backwardsHacker2);

//3.3
if (hacker1.toLowerCase < hacker2.toLowerCase) {
  console.log("The driver's name goes first.");
} else if (hacker1.toLowerCase > hacker2.toLowerCase) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
