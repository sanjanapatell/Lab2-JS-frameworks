// Import the utilities file
const utils = require('./utilities');

// Call/invoke the functions from the utilities file
utils.printMessage("Sanjana", "Patel");
utils.printMessage("Khushi", "Arora");
console.log("Factorial of 5:", utils.factorial(5));
console.log("Convert 120 minutes to hours:", utils.convertMinutesToHours(120));
utils.advancedFunction();

// Calculate the area of a rectangle
console.log("Area of a rectangle with width 5 and height 10:", utils.calculateRectangleArea(5, 10));
