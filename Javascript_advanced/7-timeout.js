// Logging start of the execution queue 
console.log("Start of the execution queue");

//Logging to the console Final code block to be executed using setTimeout (with delay of 0)
setTimeout(function() {
  console.log("Final code block to be executed");
}, 0);

// Using a loop that iterates 100 times, each iteration logs to the console the iteration number
for (let i = 1; i <= 100; i++) {
  console.log(`Iteration ${i}`);
}

// Logging to the console End of the loop printing
console.log("End of the loop");