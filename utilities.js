// First Function
function printMessage(firstName, lastName) {
    console.log(`Hi, my name is ${firstName} ${lastName} and I study at Georgian@ILAC.`);
}

// Second Function: Convert minutes to hours
function convertMinutesToHours(minutes) {
    return minutes / 60;
}

// Third Function: Calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Fourth Function: Calculate the area of a rectangle
function calculateRectangleArea(width, height) {
    return width * height;
}

// Advanced Function: Generate a random number
function advancedFunction() {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log("Generated random number:", randomNumber);
}

// Export the functions
module.exports = {
    printMessage,
    convertMinutesToHours,
    factorial,
    calculateRectangleArea,
    advancedFunction
};

// Export the convertTemperature function
function convertTemperature(celsius) {
    return (celsius * 9/5) + 32;
}
