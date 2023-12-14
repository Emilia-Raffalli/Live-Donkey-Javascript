// Déclarer 2 variables: admin et name.
// Assigner la valeur “John” à name.
// Copier la valeur de name à admin.
// Afficher la valeur de admin sur la console.

const firstName = "John";
const admin = firstName;
console.log(admin);


let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?

console.log(c);
console.log(d);

console.log(typeof(1));
console.log(typeof('Emilia'));
console.log(typeof(1+1));

console.log(typeof(true));
console.log(typeof(false));

let empty = null;
console.log(typeof(empty));

let notDefined;
console.log(typeof(notDefined));

console.log(typeof(nothing));

console.log("hello");
console.log(typeof (console.log));
// "function"


// let message = 'bonjour';
// let jourIndex = message.indexOf('jour');
// console.log(jourIndex);

let message = 'bonjour';
let message2 = message.slice(3, 5);
console.log(message2); // "jo"

 message = 'Bonjour';
console.log(message.toUpperCase()); // "BONJOUR"
console.log(message.toLowerCase()); // "bonjour"

 message = 'Bonjour Michel';
 console.log(message);
 message2 = message.replace('Michel', 'Mitch');
console.log(message2); // 'Bonjour Mitch'