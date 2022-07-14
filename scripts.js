// step 1
const url = "https://api.open5e.com/backgrounds/"
        
fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonResult) {
            console.log(jsonResult.results);
        })

// create namespace
const dungeonApp = {};

// create an eventListener for select input and put in variable
const userOptions = document.querySelector("#userClass");

// create a method to populate classOptions for the user to select

dungeonApp.userClass = function(jsonResult){
    jsonResult.results.forEach(function (name) {
        console.log(name);
    })
}

// init Method
dungeonApp.init = function(){
    dungeonApp.userClass()
}

// Step 1
// Create name space for our app

// Step 2

// Get API

// Access the attributes we want in a method.Access background node.

//     Step 3

// Query select the inputs for drop - down menu and user name field. 
// User will write name as textContent
// User will select classname from the options
// If the user doesn’t pick an option, send alert asking the user to fill it out.

//     Step 4
// create an event listener for the inputs and username in a submit button.

//     Step 5
// Initialize the code and run the name space
// Method to display api options in the input on page load.

//     Step 6

// store userName and inputSelection in variables

// Store skills and backstory as variables from the selected class.

// Step 7

// Append skills, backstory and classname in p elements
// Append to a list and print on page.

//     Step 8

// Reset the values.  

dungeonApp.init()