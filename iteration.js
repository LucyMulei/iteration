// 1.  Create a function processGreeting that accepts parameters name , weather and  a callback function greeting.Inside processGreeting, call the passed-in callback function an pass it the name and weather parameters. The callback function should log to the console a greeting, " Hello John! The weather today is sunny."(substitute with the parameters where necessary)

// 2. Given an array of  game records data for the Denver Broncos football team.Write a function called superbowlWin().The function should test each Object to see if the result is "W" — a win!.It should return the year when the win occurred (if it occurred at all!).If no win is found, it should return, sadly, undefined.

const broncosGameRecords = [
  { year: 2014, result: "N/A" },
  { year: 2015, result: "L" },
  { year: 2016, result: "W" },
  { year: 2017, result: "L" },
  { year: 2018, result: "N/A" },
  { year: 2019, result: "L" },
  { year: 2020, result: "N/A" },
  { year: 2021, result: "W" },
  { year: 2022, result: "N/A" },
  { year: 2023, result: "N/A" },
  { year: 2024, result: "W" }
];


// 3. We have an array of drivers with various information. You'll be writing three functions:
//findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
//fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
//matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

const drivers = [
  { name: 'John Doe', hometown: 'New York' },
  { name: 'Jane Smith', hometown: 'Los Angeles' },
  { name: 'Alice Johnson', hometown: 'Chicago' },
  { name: 'Bob Williams', hometown: 'Houston' },
  { name: 'David Brown', hometown: 'Miami' }
];



