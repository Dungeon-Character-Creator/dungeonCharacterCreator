// create namespace
const dungeonApp = {};

// create a method to populate classOptions for the user to select






dungeonApp.getName = function(){
    // step 1
    const url = "https://api.open5e.com/backgrounds/"

    fetch(url)
        .then(function (response) {
            console.log(response)
            return response.json();
            
        })
        .then(function (jsonResult) {
            console.log(jsonResult.results)
            const userArray = jsonResult.results[2];
            console.log(userArray);
            dungeonApp.displayClasses(jsonResult.results);
            return jsonResult.results;
        })
    }
    
    dungeonApp.displayClasses = function(names){
        names.forEach(classes => {
            // create an eventListener for select input and put in variable
            const userOptions = document.querySelector("#userClass");
            console.log(userOptions);
            const optionEl = document.createElement("option")
            const classOption = document.querySelector('option');
            optionEl.textContent = classes.name

            
            userOptions.appendChild(optionEl)
            const buttonEl = document.querySelector('button');
            
            buttonEl.addEventListener('click', function(e){
                e.preventDefault()
                const inputEL = document.querySelector('input')
                console.log(inputEL.value);
                const nameChoice = document.querySelector('.userName');
                const pEl = document.createElement('p');
                pEl.textContent = nameChoice;
                nameChoice.innerHTML = `<h3>Name:</h3> <p>${inputEL.value}</p>`;
                const classChoice = document.querySelector('.className');
                classChoice.innerHTML = `<h3>Class:</h3> <p>${userOptions.value}</p>`;
            })
        })
    }




// init Method
dungeonApp.init = function(){
    dungeonApp.getName();
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