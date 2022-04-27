// global declarations
// each question gets 10 seconds on the timer
const questions =[];
let timerValue = 10 * questions.length;
let questionIndex = 0;
let quizComplete = false;


// when start quiz button is pressed, set question index [0]

// question object {
//     title []
//     answers []
//     correct answer : "string"
// }


const onload = () => {
    // initialise local storage
    // check if high scores exist in local Storage
    // if flase then set high scores to empty in LS
};

const removeStartSection = () => {};

const startTimer = () => {
    // declare function to execute every 1second 
    const countdown = () => {
        // decrement timer value
        // if quizComplete is true, then stop timer
        // check if timer reaches 0
        // if true, game over (game over needs its own function to remove question block and timer, and render a gameover screen/section)
        // edge case of 5 second penalty when you have less than 5 seconds left on the clock, need one extra if else statement to cover this 
    };
    // set interval of 1000ms (1s)
};

// this is called whenever the user clicks on an answer
const validateAnswer = () => {
    // get answer clicked from users
    // get the correct answer for the question
    
    // compare the 2 answers 
    // if correct then go to next question
    // and if incorrect, subtract 5 seconds from timer value, 
    //  // if i decide not do an extra div in the question secion for messages, i can ignore the next 4 points for this function
    // if incorrect, call a function for rendering error alert with message and status
    // if correct, call a function for rendering success alert with message and status
    // set a timeout for 500ms and then go to next question
    // if question is last question - set quizComplete to true and then render form 
    // if question is not last question, increment the question index and then render next question
    // then go to next question

};

const handleFormSubmit = () => {
    // get the value from input 
    // check if empty then render error alert with message and staus
    // if not empty then create the score object and render
    {
        fullName: "bob smith",
        score: 25,
    }
    // push score object to JS
    // render quizCompleteSection

};

const renderTimerSection = () => {
    // use html as guide and build in JS
    // append section to main
};

const renderQuestionSection = () => {
    // use HTML as guide and build in JS
    // append section to main 
    // add click event listener on #question-section
};


const renderGameOver = () => {};

const renderAlert = (message, status) => {
    // use HTML as a guide and build in JS
    // append div to #question-section
};

const renderForm = () => {
    // use HTML as a guide and build in JS
    // append section to main 
    // add submit event handler to form 
};

const renderQuizCompleteSection = () => {}

// event listeners 
// add document on load event listener
// add start button click event listener  which listens for clicks on the start button, fires off a start game function


const startQuiz = () => {
    // remove start section
    // start timer
    // render timer section
    // render question section
};

// high scores page:
// read from local storage
// get the array 
// go through each item, 
// render scores from score objects
