// // global declarations


// target start button
const startButton = document.getElementById("start-btn");

// target banner section
const bannerSection = document.getElementById("banner");

const TimerSection = document.getElementById("card-timer");

questionContainer = document.getElementById("question-container")

// target main element
const mainElement = document.getElementById("main");

// total time on the clock
let countdownClock = 60;

// current question index
let questionIndex = 0;

// Player Score variable
let playerScore= 10;
let correctLog = 0;
let fullName = ""

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

    {
    text: "Who does Homer work for without realizing he is a super villain?",
    options: ["Luigi Risotto", "Lucius Sweet", "Hank Scorpio", "Rainier Wolfcastle"],
    answer: "Hank Scorpio",
},
];



// event handler function to handle click events in question section
// this function decides what happens next
const handleOptionClick = (event) => {
  
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
            playerScore,
        };
       
          // store score in local storage
            storeInLS("score", playerScore);

        if (answer.value === questions[questionIndex].answer && questionIndex <= questions.length) {
            answeredCorrectly();

        }
        else {
            answeredInCorrectly();

        }   
	

        if (questionIndex < questions.length - 1) {
        // go to next question if not the last question
        // increment the question index by 1
        questionIndex += 1;

         // remove question
         removeQuestion();

        // render question
        renderQuestion();
        } 
        else {
           
            renderGameOver ();

        };
    };
};



// Function to render the timer to the page
const renderTimer = () => {

       // create section
       const TimerSection = document.createElement("section");
       TimerSection.setAttribute("class", "content-section timer-container");
       TimerSection.setAttribute("id", "timer-container");
       // Create timer 
       const timerElement = document.createElement("div");
       timerElement.textContent = "Time Remaining" + countdownClock;
       timerElement.setAttribute("class", "card-timer");
       timerElement.setAttribute("class", "large-font timer-count");
       timerElement.setAttribute("id", "clock");
       timerElement.setAttribute("display", "flex");

       // append h2 and ul to section
       TimerSection.append(timerElement); 

       // append question section to main element
       mainElement.append(TimerSection); 

};  


// function to render question to page
const renderQuestion = () => {
  
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

    document.querySelector("#clock").remove();
    
    document.getElementById("question-container").remove();
 

      // create section
      const section = document.createElement("section");
      section.setAttribute("class", "high-score-form-section title alert");
      section.setAttribute("name", "high-score-form");
      section.setAttribute("id", "high-score-form");

      // create h1
      const h1 = document.createElement("h1");
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

  

 // function to render the results

const handleFormSubmit = (event) => {
    event.preventDefault();
  
    // get full name from input
    fullName = document.getElementById("full-name").value;
  
    // validate
    if (fullName) {
      // if valid then store feedbackResults in LS
      const score = JSON.parse(localStorage.getItem("score"));

      // push the results back to LS
      storeInLS("allScores", score);
    
      const final = JSON.parse(localStorage.getItem("allScores"))
     
  
      // remove form
      document.getElementById("high-score-form").remove();


    //   render High Scores


      // create section
      const section = document.createElement("section");
      section.setAttribute("class", "high-score-form-section title alert");
      section.setAttribute("name", "high-score-form");

      // create h1
      const h1 = document.createElement("h1");
    //   h1.setAttribute("class", "question");
      h1.textContent = ("HIGH SCORES");
      section.append(h1);
    

        // create h2
        for(var i=0; i<final.length; i++) {
    let hs1 = document.createElement("h2");
    hs1.setAttribute("class", "title alert");
    hs1.textContent = final[i].name + " " + final[i].score ;
    section.append(hs1);

        };


  mainElement.append(section);


    } else {
      alert("Please enter full name!");
    }
  
};
    




// Function that checks if answered was correct and if current question index is less than questions items and updates score 
   
    const answeredCorrectly = () => {
        countdownClock +=5;
        playerScore +=10;
        correctLog++;
       
        if (questionIndex < questions.length) {
           
            return playerScore;

        } else {
       
            clearInterval(clock);
            countdownClock = 0
       
        };
    };



    // Function that checks if answered was incorrect and if current question index is less than questions items 

    const answeredInCorrectly = () => {

        countdownClock -=5;
        if (countdownClock <= 0) {
            clearInterval(clock);
            console.log(playerScore);
            // removeQuestion ();
            countdownClock = 0

          };       
    };




  // function to remove banner from page
const removeBanner = () => {
    bannerSection.remove();
  };



  // function to remove question section from page
const removeQuestion = () => {
    // console.log("remove question");

    document.getElementById("question-container").remove();
  };

  

  // The startGame function is called when the start button is clicked

const startTimer = () => {
    var timerElement = document.querySelector("#clock");
    startButton.disabled = true;
    const timerTick =  () => {
        if (countdownClock <= 0) {
            clearInterval(clock);

            renderGameOver();

      } else {
        countdownClock -= 1;
        timerElement.textContent = "Time Remaining: " + countdownClock;
    }
};
const clock = setInterval(timerTick, 1000);
};


// Initialise Local Storage

const initialiseLocalStorage = () => {
  
    const highScoreFromLS = JSON.parse(localStorage.getItem("score"));
    const allScoresFromLS = JSON.parse(localStorage.getItem("allScores"));
  
  
    if (!highScoreFromLS) {

      localStorage.setItem("score", JSON.stringify([]));
    };

  
    if (!allScoresFromLS) {
      // if not exist set LS to have feedbackResults as an empty array
      localStorage.setItem("allScores", JSON.stringify([]));
    }
  };


  
  let storeInLS = (key, value) => {

    const arrayFromLS = JSON.parse(localStorage.getItem(key, value));
  
  
    // set scores for high scores table in LS
    if(key === "allScores"){
        arrayFromLS.push({name: fullName, score: value})
        localStorage.setItem(key, JSON.stringify(arrayFromLS));
    }else{
        localStorage.setItem(key, JSON.stringify(value));
    };
  };


    // declare the event handler function for start button click
const handleStartButtonClick = () => {

    //   initialise local storage
  initialiseLocalStorage();

    // remove banner section
  removeBanner();

    // render timer section
  renderTimer ();

    // render question
  renderQuestion();

    //   Starts the timer
  startTimer();
};



  // Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", handleStartButtonClick);
