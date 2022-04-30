// // global declarations
// // each question gets 10 seconds on the timer
// const questions =[];
// let timerValue = 10 * questions.length;
// let questionIndex = 0;
// let quizComplete = false;


// target start button
const startButton = document.getElementById("start-btn");

// target banner section
const bannerSection = document.getElementById("banner");

// target main element
const mainElement = document.getElementById("main");

// current question index
let questionIndex = 0;

// var timerElement = document.querySelector(".timer-count");
// var startButton = document.querySelector("#start-btn");

// all options
// const options = ["Yes", "No", "Maybe"];

// all questions array
const questions = [
    {
      text: "What was the name of Abe Simpsons military unit?",
      options: ["The Chirping Cheep Cheeps", "The Jumping Sushies", "The Flaming Salamanders", "The Flying Hellfish"]
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
    }
}





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
  

  // function to remove banner from page
const removeBanner = () => {
    console.log("remove banner");
    bannerSection.remove();
  };

//   // The startGame function is called when the start button is clicked
// function startTimer() {
//     var timerElement = document.querySelector(".timer-count")
//     // isWin = false;
//     timerCount = 30;
//     // Prevents start button from being clicked when round is in progress
//     startButton.disabled = true;


// //     // The setTimer function starts and stops the timer and triggers winGame() and loseGame()

//     // Sets timer
//     timer = setInterval(function() {
//       timerCount--;
//       timerElement.textContent = timerCount;
//     //   if (timerCount >= 0) {
//     //     // Tests if win condition is met
//     //     if (isWin && timerCount > 0) {
//     //       // Clears interval and stops timer
//     //       clearInterval(timer);
//     //       winGame();
//     //     }
//     //   }
      
//       // Tests if time has run out
//       if (timerCount === 0) {
//         // Clears interval
//         clearInterval(timer);
//         // loseGame();
//       }
      
//     }, 1000);
//   }




// declare the event handler function for start button click
const handleStartButtonClick = () => {
  console.log("start button clicked");
  // initialise local storage
//   initialiseLocalStorage();

  // remove banner section
  removeBanner();

  // render question
  renderQuestion();

//   Starts the timer
//   startTimer();
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
// // render scores from score objects
