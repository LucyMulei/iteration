// 1.  Create a function processGreeting that accepts parameters name , weather and  a callback function greeting.
//Inside processGreeting, call the passed-in callback function an pass it the name and weather parameters. 
//The callback function should log to the console a greeting, " Hello John! The weather today is sunny."
//(substitute with the parameters where necessary)
function processGreeting(name,weather,greeting){
  greeting(name,weather)
}
function greeting(name, weather){
  console.log( `Hello ${name}! The weather today is ${weather}.`)
}
 processGreeting("John", "Sunny", greeting);
// 2. Given an array of  game records data for the Denver Broncos football team.
//Write a function called superbowlWin().
//The function should test each Object to see if the result is "W" — a win!.
//It should return the year when the win occurred (if it occurred at all!).If no win is found,
// it should return, sadly, undefined.

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

function superbowlWin(broncosGameRecords){
  const win = broncosGameRecords.find(
    (broncosGameRecord) => broncosGameRecord.result === "W"
  );
  if(win){
    return win.year;
  }else{
    return undefined;
  };
  Q: How to access the undefined part!!





// 3. We have an array of drivers with various information. You'll be writing three functions:
  //findMatching- This function takes an array of drivers' names and a string as arguments,
  // and returns the matching list of drivers. The function should be case insensitive.
  //fuzzyMatch - This function takes an array of drivers' names and a string as arguments for 
  //querying the array, and returns all drivers whose names begin with the provided letters.
  //matchName - This function takes an array of driver objects and a string as arguments. 
 // Each driver object has two properties: name and hometown. The function should return 
  //each element whose name property matches the provided string argument.

const drivers = [
  { name: 'John Doe', hometown: 'New York' },
  { name: 'Jane Smith', hometown: 'Los Angeles' },
  { name: 'Alice Johnson', hometown: 'Chicago' },
  { name: 'Bob Williams', hometown: 'Houston' },
  { name: 'David Brown', hometown: 'Miami' }
];
function findMatching(drivers ,name )
{
  //I could not figure this out for the life of me 

}
function fuzzyMatch(){

}
function matchName(drivers , name){
   return drivers.filter(driver => driver.name === name);

}

// 4. We just uploaded 10 coding tutorials online, but some of them have inconsistent casing. 
//We want all the titles to be "title case", in other words, 
//the first letter of each word should be capitalized.
// Create a new array containing the names of the tutorials with proper title case formatting. 
//For example, 'what does the this keyword mean?' should become 'What Does The This Keyword Mean?'.
//Your job is to write the following function: titleCased(): returns an array with title case tutorial names.
// Note that this function takes no arguments and should use the global tutorials variable as data.

const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];
function titleCased(){
   return tutorials.map(tutorial => {
    return tutorial.replace(/\b\w/g, char => char.toUpperCase());
  });
}

}


// 5. You are given an array of objects where each object represents a person with the properties name,
// age and salary.
// Your task is to use the reduce method to perform various data manipulations and aggregations based on this 
//array.
   // - Define a variable totalSalary that stores the value the total salary of all people in the array.
   // - Define a variable averageAge that stores the value the average age of all people in the array.
   // - Write a custom reducer function that will calculate the total salary for people within the age range
   // of 30-39.

  const people = [
    { name: 'Alice', age: 28, salary: 70000 },
    { name: 'Bob', age: 35, salary: 85000 },
    { name: 'Charlie', age: 30, salary: 60000 },
    { name: 'David', age: 45, salary: 95000 },
    { name: 'Eve', age: 25, salary: 50000 }
  ];


 const totalSalary = people.reduce((acc,people) => acc + people.salary ,0);

 const averageAge = people.reduce ((acc, people)=> acc + people.age,0 )

const totalSalaryCertainAge = people.reduce ((acc, people)=> {
  if(people.age>=30 && people.age <=39 ){
    return acc + people.salary;
  } else {
    return acc;
  };
}, 0);


console.log(totalSalaryCertainAge)
