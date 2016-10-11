// Hoisting
whatsUp()
// console.log(name) // variables are not hoisted

// Variable Declaration
var name = 'James'
console.log(name) // but variables are available after they are declared

// Main code executes immediately
console.log('What\'s Up?')

// Code within functions only runs when the function is called
// Function Declaration
function whatsUp() {
    console.log('What is up?')
}

// Function Call
whatsUp()

// Making repeatable code, the long way
var mph1 = 10;
var hours1 = 5;
var distance1 = mph1 * hours1;

var mph2 = 80;
var hours2 = 2;
var distance2 = mph2 * hours2;

var mph3 = 55;
var hours3 = .75;
var distance3 = mph3 * hours3;

console.log(distance1, distance2, distance3);

// Making repeatable code, the short way
function distance(mph, hours = 10) {
    // Default arguments without ES6
    hours = hours || 10

    // Return exits the function, no code below runs
    // return true

    // Conditional statements within functions can return early
    if (mph > 65) {
        // Any code can run in here
        console.log('Warning:')
        return 'Too Fast! No way you will get that distance number from us.'
    }

    // Exits function and returns value, leaving this off returns undefined
    return mph * hours

    // This code will not run because it's after the return
    console.log('You are never going to see this.')
}

console.log(distance(65))

// What happens if we don't declare a function or variable?
//console.log(madeUpFunction())
//console.log(madeUpVar)

// Using a function to build up a variable value
var distanceTraveled = distance(55, 2)
distanceTraveled = distanceTraveled + distance(80, 16)
distanceTraveled = distanceTraveled + distance(25, .25)
console.log(distanceTraveled)

// Using if, else if, and else
// Works well for conditional checking
var movie = 'Forest Gump'
var year = 1995

if (movie === 'Forest Gump' && (year >= 1995 || 1 != 2)) {
    console.log('Life is like a box of chocolates.')
}
else if (movie === 'Groundhog Day') {
    console.log('Not again!')
}
else if (movie === 'Star Wars') {
    console.log('Luke, I am your father.')
}
else {
    console.log(movie + ' is awesome!')
}

// Switch works well for single-value checking
switch (movie) {
    case 'Forest Gump':
        console.log('Buba-gump Shrimp')
        break
    case 'Groundhog Day':
        console.log('Again.')
        break
    case 'Star Wars':
        console.log('Use the force!')
        break
    default:
        console.log(movie + ' is worth seeing!')
}

// Remainder operator, is it divisable by three
console.log(99 % 3 === 0)
console.log(1 % 3 === 0)
console.log(3 % 3 === 0)

if (50 % 5 === 0) {
    console.log('Yes it is divisable by five.')
}

// Looping
var list = ['Sally','Tom','Joel','Kyle','Troy','Manny','Sam','Whitney','Jeff','Brian','Young Mi','Keith','Charlie']

for (var i = 0; i < list.length; i++) {
    console.log(list[i])
}

// Looping over a specified number + dynamic HTML
for (var i = 0; i < 100; i++) {
    console.log(i)
}

for (var i = 0; i < 100; i++) {
    // Only works when you're in a browser viewing this through index.html
    if (typeof document != 'undefined') {
        document.querySelector('.container').innerHTML += `<button class="btn btn-primary btn-lg">Button ${i}</button>`
    }
}

// Incrementing a number with a loop
var total = 0

for (var i = 0; i < 300; i++) {
    total += i
}

console.log(total)

// Console assert, node should return nothing if the assertion that the condition is true works
function sayHello(greeting) {
    return greeting
}
console.assert(sayHello('Hello') === 'Hello')

// While loops, do not use generally, can cause browser to crash, but ok in Node
// while (true === true) {
//     console.log(new Date())
// }

//
