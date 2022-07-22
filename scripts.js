// create namespace
const dungeonApp = {};

// Get class names from API
dungeonApp.getName = function () {
    // create a constant to store our API
    const url = "https://api.open5e.com/backgrounds/"

    fetch(url)
        .then(function (response) {
            return response.json();

        })
        .then(function (jsonResult) {
            dungeonApp.displayClasses(jsonResult.results);
            dungeonApp.randomize(jsonResult.results);
            dungeonApp.event(jsonResult.results);
            return jsonResult.results;
        })
}

//Query Select elements we will need
const userOptions = document.querySelector("#userClass");
const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const skillsEl = document.querySelector(".skills");
const backstoryEl = document.querySelector(".backstory")
const classChoice = document.querySelector('.className');
const nameChoice = document.querySelector('.userName');
const imgCon = document.querySelector('.imageContainer');
const inputEL = document.querySelector('input')

// Create an image Element and p element 
const imgEl = document.createElement("img");
const pEl = document.createElement('p');


// Function to display classes on page
dungeonApp.displayClasses = function (names) {
    names.forEach(classes => {
        // create an eventListener for select input and put in variable
        const optionEl = document.createElement("option")
        optionEl.textContent = classes.name
        userOptions.appendChild(optionEl);

    })
}

// Creae a button that randomizes class for user
dungeonApp.randomize = function (randomize) {
    const randomEl = document.querySelector(".randomize")
    randomEl.addEventListener("click", function (e) {
        const randomNumber = Math.floor(Math.random(randomize) * 3)
        console.log(randomNumber);
        e.preventDefault()
        if (randomNumber === 0) {
            userOptions.value = "Acolyte"
        } else if (randomNumber === 1) {
            userOptions.value = "Con Artist"
        } else {
            userOptions.value = "Scoundrel"
        }
        dungeonApp.displayInfo(randomize);
    })
}

// create an event listener on the START YOUR JOURNEY button
dungeonApp.event = (function (names) {
    buttonEl.addEventListener('click', function (e) {
        e.preventDefault()
        dungeonApp.displayInfo(names);
    })
})

// Display users name, class, skills and backstory into Character Card
dungeonApp.displayInfo = function (names) {
    imgCon.innerHTML = '';
    imgCon.appendChild(imgEl)

    // Error Check if user has put in a name.
    if (inputEl.value) {
        const nameChoice = document.querySelector('.userName');
        const pEl = document.createElement('p');
        pEl.textContent = nameChoice;
        nameChoice.innerHTML = `<h3>Name:</h3> <p>${inputEL.value}</p>`;
        const classChoice = document.querySelector('.className');
        classChoice.innerHTML = `<h3>Class:</h3> <p>${userOptions.value}</p>`;

        // Create If Else statements to check for each class picked and get skills/backstory from API
        if (userOptions.value === "Acolyte") {
            skillsEl.innerHTML = `<h3>Skills:</h3> <p>${names[0].skill_proficiencies}</p>`
            backstoryEl.innerHTML = `<h3>Backstory:</h3> <p>${names[0].feature_desc}</p>`
            imgEl.src = "./assets/Acolyte.webp"
            imgEl.alt = "Baddass warrior in robe holding a morning star"
        } else if (userOptions.value === "Con Artist") {
            skillsEl.innerHTML = `<h3>Skills:</h3> <p>${names[1].skill_proficiencies}</p>`
            backstoryEl.innerHTML = `<h3>Backstory:</h3> <p>${names[1].feature_desc}</p>`
            imgEl.src = "./assets/conArtist.jpg"
            imgEl.alt = "Armoured jester with a hawk"
        } else {
            skillsEl.innerHTML = `<h3>Skills:</h3> <p>${names[2].skill_proficiencies}</p>`
            backstoryEl.innerHTML = `<h3>Backstory:</h3> <p>${names[2].feature_desc}</p>`
            imgEl.src = "./assets/scoundrel.jpg"
            imgEl.alt = "Masked and caped warrior"
        }
        inputEL.value = '';
        // If user hasn't written name, Alert that they MUST!!!
    } else {
        alert("Please enter Character Name");
    }
}

// init Method
dungeonApp.init = function () {
    dungeonApp.getName();
}

dungeonApp.init();


// Step 1
// Create name space for our app

// Step 2

// Get API

// Access the attributes we want in a method.Access background node.

//     Step 3

// Query select the inputs for drop - down menu and user name field. 
// User will write name as textContent
// User will select classname from the options
// If the user doesn't pick an option, send alert asking the user to fill it out.

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

