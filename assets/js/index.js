// // global declarations
// // each question gets 10 seconds on the timer
// let timerValue = 10 * questions.length;
// let quizComplete = false;


// target start button
const startButton = document.getElementById("start-btn");

// target banner section
const bannerSection = document.getElementById("banner");

const TimerSection = document.getElementById("card-timer");





// target main element
const mainElement = document.getElementById("main");

// current question index
let questionIndex = 0;

// Player Score variable
let playerScore= 0;
let correctLog = 0;

// var timerElement = document.querySelector(".timer-count");
// var startButton = document.querySelector("#start-btn");

// all options
// const options = ["Yes", "No", "Maybe"];

// all questions array
const questions = [
    {
        text: "What was the name of Abe Simpsons military unit?",
        options: ["The Chirping Cheep Cheeps", "The Jumping Sushies", "The Flaming Salamanders", "The Flying Hellfish"],
        answer: "The Flying Hellfish",
    },

    {
        text: "Which jazz musicians teaches Lisa about the blues?",
        options: ["Missin' Eyeball Joe", "Bleeding Gums Murphy", "No Teeth Johnson", "Footless Frank Fontaine"],
        answer: "Bleeding Gums Murphy",
    },

    {
        text: "Who shot Mr. Burns?",
        options: ["Tito Puente", "Barney Gumble", "Maggie Simpson", "Homer Simpson"],
        answer: "Maggie Simpson",
    },

    {
        text: "Who convinces Springfield to build a giant monorail?",
        options: ["Troy McClure", "Lionel Hutz", "Lyle Lanley", "Philip J. Fry"],
        answer: "Lyle Lanley",
    },

    {
        text: "Where does Krusty take the kids after realizing his camp is a sham?",
        options: ["Disneyland", "Tijuana", "Las Vegas", "Legoland"],
        answer: "Tijuana",
    },

    {
        text: "What is the name of Hans Moleman's film festival entry?",
        options: ["Hans Moleman: A Football Saga", "Football to Groin", "Man Getting Hit by Football", "Hans Moleman Gets Hit by Football"],
        answer: "Man Getting Hit by Football",
    },

    {
        text: "What is the secret ingredient in a Flaming Homer/Moe?",
        options: ["Chili powder", "Whiskey", "Cough syrup", "Red wine"],
        answer: "Cough syrup",
    },

    {
        text: "What video game does Bart get caught stealing?",
        options: ["Murder House", "Bonestorm", "Super Barrio Brothers", "Dragon Knights VI"],
        answer: "Bonestorm",
    },

    {
        text: "For which baseball team does Homer become the mascot?",
        options: ["Springfield Electrons", "Springfield Protons", "Springfield Nucleons", "Springfield Isotopes"],
        answer: "Springfield Isotopes",
    },
];

// event handler function to handle click events in question section
// this function decides what happens next
const handleOptionClick = (event) => {
    console.log("clicked somewhere in question section");
  
    // get current target
    const currentTarget = event.currentTarget;
  
    // get target
    const target = event.target;
  
    // check if click originates from li only
    // check if target element is li element
    if (target.tagName === "LI") {
        // get the option the user clicked on
        const value = target.getAttribute("data-value");
  
        // get the question the user answered
        const question = questions[questionIndex].text;
  
        // build an answer object that contains question and answer
        const answer = {
            question,
            value,
        };

        if (answer.value === questions[questionIndex].answer) {
            answeredCorrectly();
            console.log("correct");
        }
        else {
            answeredInCorrectly();
            console.log("incorrect");
        }   
	

        // // store answer in local storage
        // storeInLS("feedbackResults", answer);

        // remove question
        removeQuestion();

        if (questionIndex < questions.length - 1) {
        // go to next question if not the last question
        // increment the question index by 1
        questionIndex += 1;

        // render question
        renderQuestion();
        } 
        else {
            renderGameOver ();
            // removeTimerSection ();
            // removeQuestion ();
    //     // if last question then render results and form
    //     renderResults();
    //     renderForm();
        }
    }
};




// function to render timer to page
const renderTimer = () => {
    console.log("render timer");
       // create section
       const section = document.createElement("section");
       section.setAttribute("class", "content-section question-container");
       

       // Create timer
       const div1 = document.createElement("div");
       div1.setAttribute("class", "card-timer");
       div1.setAttribute("display", "flex");

   
       const div2 = document.createElement("div");
       div2.setAttribute("class", "timer-text");
   
       const div3 = document.createElement("div");
       div3.setAttribute("class", "large-font timer-count");
       div3.setAttribute("id", "timer-count");
       div3.textContent = "60"
       
       const h3 = document.createElement("h3");
       h3.setAttribute("class", "large-font timer-count");
       h3.textContent = "seconds remaining"

       div1.append(div2, div3, h3);

       // append h2 and ul to section
       section.append(div1); 

       // append question section to main element
       mainElement.append(section); 

};  


// function to render question to page
const renderQuestion = () => {
    console.log("render question");
  
    // get current question
    const currentQuestion = questions[questionIndex];
  
    // create section
    const section = document.createElement("section");
    section.setAttribute("class", "content-section question-container");
    section.setAttribute("id", "question-container");
    
    // create h2
    const h2 = document.createElement("h2");
    h2.setAttribute("class", "question");
    // TODO: this should be the dynamic question title
    h2.textContent = `${questionIndex + 1}. ${currentQuestion.text}`;
  
    // create ul and append 4 li
    const ul = document.createElement("ul");
    ul.setAttribute("class", "question-list");
  
    // TODO: loop over options to create and append li to ul
    const li1 = document.createElement("li");
    li1.setAttribute("class", "list-item");
    li1.setAttribute("data-value", currentQuestion.options[0]);
    li1.textContent = currentQuestion.options[0];
  
    const li2 = document.createElement("li");
    li2.setAttribute("class", "list-item");
    li2.setAttribute("data-value", currentQuestion.options[1]);
    li2.textContent = currentQuestion.options[1];
  
    const li3 = document.createElement("li");
    li3.setAttribute("class", "list-item");
    li3.setAttribute("data-value", currentQuestion.options[2]);
    li3.textContent = currentQuestion.options[2];

    const li4 = document.createElement("li");
    li4.setAttribute("class", "list-item");
    li4.setAttribute("data-value", currentQuestion.options[3]);
    li4.textContent = currentQuestion.options[3];

    

    ul.append(li1, li2, li3, li4);
  
    // append h2 and ul to section
    section.append(h2, ul);
  
    // append question section to main element
    mainElement.append(section);
  
    // add event listener on question section
    section.addEventListener("click", handleOptionClick);
  };


  const renderGameOver = () => {

      // create section
      const section = document.createElement("section");
      section.setAttribute("class", "high-score-form-section title alert");
      section.setAttribute("name", "high-score-form");

      // create h1
      const h1 = document.createElement("h1");
    //   h1.setAttribute("class", "question");
      h1.textContent = ("GAME OVER");

            // create Image
    const img = document.createElement("img");
    img.setAttribute("src", "./images/egghead.jpg");
    img.setAttribute("id", "game-over-image")
    

        // create h2
    const h2 = document.createElement("h2");
    h2.setAttribute("class", "title alert");
    h2.textContent = ("Submit your high score");

    // Create Form Field 

    const form = document.createElement("form");

    const inputDiv = document.createElement("div");
  inputDiv.setAttribute("class", "form-control");


  const input = document.createElement("input");
  input.setAttribute("id", "full-name");
  input.setAttribute("class", "form-input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Enter full name");

  inputDiv.append(input);

//   Create submit button

  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("class", "btn-2");
  button.textContent = "Submit";

  form.append(inputDiv, button);

  section.append(h1, img, h2, form);

  mainElement.append(section);

  // add event listener for form submission
  form.addEventListener("submit", handleFormSubmit);

  };
  

  const handleFormSubmit = () => {

  }
  
  // function to render the results
  const renderResults = () => {
      console.log("render results");
    };
    
    // const renderForm = () => {
    //     console.log("render game over screen");
    // };
    
    // const removeTimerSection = () => {
    //     console.log("remove question");
    //     // document.getElementById("card-timer").remove();
    //     setTimeout(function() {
    //         document.getElementById("card-timer").style.display = "none";
    //     // TimerSection.style.display = 'none';



    //     } );
    // };
      
           

// *******************************************


    // if answered was correct this checks if current question index is less than questions items and and add score 
    // and updates content, else loads gameOver
    const answeredCorrectly = () => {
        playerScore +=10;
        correctLog++;
        // questionIndex++;
        if (questionIndex < questions.length - 1) {
            console.log(playerScore);
            return playerScore;

     
            // outcomeDisplay.style.color = "green";
            // outcomeDisplay.textContent = "Awesome! You answered correctly. Progess: " + correctLog + "/" + questions.length;
        // } 
        // } else {
        //     timeLeft = 0;

        // if (timerCount === 0) {
        //     // clears interval
        //     clearInterval(timer);
        //     renderGameOver();
        // //     // loseGame();
        //   }
        };
    };

    // **************************TO DO **************************************
    // create a dynamically rendered game over page/submit high score form 
    // use the 2 functions renderResults() and renderForm() below
    // Create a remove timer function that will fire when the renderResults and renderForm functions are triggered - any scenerio where the game ends 
    // set up local storage get and set functions for the high scores section
    // consider seconds on timer = 10 seconds per question in the questions array, so the time on the clock can be dynamic instead of hardcoded


    // if answered was incorrect this checks if current question index is less than questions items 
    // and updates content, else loads gameOver
    const answeredInCorrectly = () => {
        // questionIndex++;
        // let timerCount = document.getElementById ("timer-count");
        var timerElement = document.querySelector(".timer-count")
        timerCount -=5;

            // alert.style.color = "red";
            // alert.textContent = "Oops! You answered incorrectly. Progess: " + correctLog + "/" + questions.length;
        // }   
        // else {
        //     timeLeft = 0; 

        // if (timerCount <= 0) {
            if (questionIndex === questions.length - 1) {
            // Clears interval
            clearInterval(timer);
            // loseGame();
            timeLeft = 0; 
            // removeQuestion ();
            // removeTimerSection ();
            // renderResults();
            // renderForm();
            // renderGameOver();
            
            
          } else {
            timeLeft = 0;

        if (timerCount === 0) {
            // clears interval
            clearInterval(timer);
            renderGameOver();
        //     // loseGame();
          }
        };
          
  
    };


// ****************************************************************


//   TO DO - Function to remove the timer from the page on game completion



  // function to remove banner from page
const removeBanner = () => {
    console.log("remove banner");
    bannerSection.remove();
  };

  // function to remove question section from page
const removeQuestion = () => {
    console.log("remove question");

    document.getElementById("question-container").remove();
  };

  

  // The startGame function is called when the start button is clicked
function startTimer() {
    var timerElement = document.querySelector(".timer-count")
    // isWin = false;
    timerCount = 30;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;


//     // The setTimer function starts and stops the timer and triggers winGame() and loseGame()

    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
    //   if (timerCount >= 0) {
    //     // Tests if win condition is met
    //     if (isWin && timerCount > 0) {
    //       // Clears interval and stops timer
    //       clearInterval(timer);
    //       winGame();
    //     }
    //   }
      
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        // setTimeout();
        // loseGame();
      }
      
    }, 1000);
  };




// declare the event handler function for start button click
const handleStartButtonClick = () => {
  console.log("start button clicked");
  // initialise local storage
//   initialiseLocalStorage();

  // remove banner section
  removeBanner();

  renderTimer ();

  // render question
  renderQuestion();

//   Starts the timer
  startTimer();
};



  // Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", handleStartButtonClick);


// ****************************************************************
// pseudocode and notes:

// // when start quiz button is pressed, set question index [0]

// // question object {
// //     title []
// //     answers []
// //     correct answer : "string"
// // }


// const onload = () => {
//     // initialise local storage
//     // check if high scores exist in local Storage
//     // if flase then set high scores to empty in LS
// };

// const removeStartSection = () => {};

// const startTimer = () => {
//     // declare function to execute every 1second 
//     const countdown = () => {
//         // decrement timer value
//         // if quizComplete is true, then stop timer
//         // check if timer reaches 0
//         // if true, game over (game over needs its own function to remove question block and timer, and render a gameover screen/section)
//         // edge case of 5 second penalty when you have less than 5 seconds left on the clock, need one extra if else statement to cover this 
//     };
//     // set interval of 1000ms (1s)
// };

// // this is called whenever the user clicks on an answer
// const validateAnswer = () => {
//     // get answer clicked from users
//     // get the correct answer for the question
    
//     // compare the 2 answers 
//     // if correct then go to next question
//     // and if incorrect, subtract 5 seconds from timer value, 
//     //  // if i decide not do an extra div in the question secion for messages, i can ignore the next 4 points for this function
//     // if incorrect, call a function for rendering error alert with message and status
//     // if correct, call a function for rendering success alert with message and status
//     // set a timeout for 500ms and then go to next question
//     // if question is last question - set quizComplete to true and then render form 
//     // if question is not last question, increment the question index and then render next question
//     // then go to next question

// };

// const handleFormSubmit = () => {
//     // get the value from input 
//     // check if empty then render error alert with message and staus
//     // if not empty then create the score object and render
//     {
//         fullName: "bob smith",
//         score: 25,
//     }
//     // push score object to JS
//     // render quizCompleteSection

// };

// const renderTimerSection = () => {
//     // use html as guide and build in JS
//     // append section to main
// };

// const renderQuestionSection = () => {
//     // use HTML as guide and build in JS
//     // append section to main 
//     // add click event listener on #question-section
// };


// const renderGameOver = () => {};

// const renderAlert = (message, status) => {
//     // use HTML as a guide and build in JS
//     // append div to #question-section
// };

// const renderForm = () => {
//     // use HTML as a guide and build in JS
//     // append section to main 
//     // add submit event handler to form 
// };

// const renderQuizCompleteSection = () => {}

// // event listeners 
// // add document on load event listener
// // add start button click event listener  which listens for clicks on the start button, fires off a start game function


// const startQuiz = () => {
//     // remove start section
//     // start timer
//     // render timer section
//     // render question section
// };

// // high scores page:
// // read from local storage
// // get the array 
// // go through each item, 
// // render scores from score objects;