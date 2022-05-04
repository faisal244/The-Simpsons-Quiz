# The Simpsons Quiz


I was tasked with building a timed coding quiz with multiple-choice questions, built entirely from scratch using HTML, CSS and Vanilla JavaScript. This app runs in the browser and features dynamically updated content powered by JavaScript code that i have written. As i was allowed to base this quiz on a subject of my choosing, naturally i chose to base this on arguably the greatest TV show of all time - The Simpsons.

![](images/homer-take-quiz.jpeg)




## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question correctly
THEN time is added to the clock (5 seconds)
WHEN I answer a question incorrectly
THEN time is subtracted from the clock (5 seconds)
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

## Mock-Up

The following animation demonstrates the application functionality:

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](images/Simpsons%20Quiz%20Demo.gif)

## Link to deployed application

* https://faisal244.github.io/The-Simpsons-Quiz/




Below is an overview of the approach i took when working on the code and underlying JavaScript logic for this project in order to meet the University of Birmingham acceptance criteria:


## JavaScript 

*  Created variables to target the start button, homepage banner section, the main HTML element, and timer element

* Created a questions array to store all the questions, multiple choice options as well as the correct answer for each question

* Created a render question function, which gets the current question by using an empty question index array i declared, then dynamically creates elements to match the html structure and css classes and ID's i defined earlier

Created more validation logic for the handleOptionClick () function, which listens for clicks to the question container, checks if they are a click on a list item, then grabs the data-value field that gets written with the answer option and stores it in an answer object as a question/answer pair in local storage

* Created a function that removes the homepage banner section from the page when the user clicks the start button

* Connected all these functions together with a function that gets triggered when the start button is clicked - handleStartButtonClick - this then triggers removeBanner(), renderQuestion() and startGame() which renders the first question and starts the timer

* Used an if/else statement to increment the question thats being rendered by 1, until there are no more questions left in the questions array. Would like to build some randomisation functionality here at some point in the future

* Created 2 functions that define logic when a questions is answered and validates if it has been answered correctly/incorrectly

* Created a function that removes all elements from the screen at the end of the game (When all questions are answered or the timer reaches 0) and renders a game over screen, along with an input field for the user to input their name

* Initially, i setup local storage to store the score from the users session, and an additional empty array to store all scores which could be used for a high scores page. Local storage gets initialised when the start button is clicked

* Created a high score page to render after user submits their name at the end of the game

* created separate highscore.html and highscores.js files, so when a user clicks on the high scores link in the top navigation, a high score table is dynamically generated and populates itself with player name and score data stored in local storage




## HTML

* Built the sections i wanted to be rendered in Javascript in HTML first so i could accurately define styling and to make things easier when i was working with JS to dynamically render the content - this way i had a blueprint of exactly what i wanted to be rendered, and i could remove the html from index.html at the end of the project and when the site was ready to be deployed

* Used a custom Simpsons font across the site, with some google fonts also used as a fallback

* used a CSS animation library in the form of animate.css




## CSS

* Defined CSS variables which allowed me to easily tweak the sites colour pallette to my liking 

* Used CSS to add background images to sections across the site

* defined hover effects for buttons and navigation links

* Defined a media query for screen sizes and viewports under 768px

* extensive use of flex containers in order to make the site fully responsive when viewed on mobile devices.

* Added a gradient to the homescreen banner image and other background images so that text would be more prominent when overlayed on top of them. 

## Challenges I faced 

* This was a really challenging project to undertake at this stage of my journey of becoming a full stack web developer. There were a few instances while working on this project where i realised the approach i had taken was not the best way of doing things, and was making the final solution a lot more complicated than it needed to be.

* I had several issues with the timer functionality on this project, and getting it to behave how i wanted. Early on, i ended up creating a separate renderTimer() function because the timer was dynamically re-rendering along with the whole question container every time the user answered a question. Having it operate independently to the next question getting rendered, and only being triggered  to count down when the user clicks on the start quiz button solved this.

* I then had issues much further into the project where i had inadvertantly created some conflicted rules and logic around the timer, which was throwing up a myriad of console errors. Eventually i had no other chice but to refactor my code and re-write the timer function, keeping all the timing logic in one place rather than having multiple other validation functions trying to incorporate the timer into their logic as well.

* I also spent far too long trying to find a way to remove the timer when the game ended, but kept on encountering various errors, so decided that a better approach would be to replace the timer and question sections with a dynamically rendered game over section instead

* I eventually got to the stage where the Game over /submit high score screen was rendering in all end of game scenarios, but was still throwing an error if last question is answered correctly.  Lots of debugging had to be done to find a solution for this - hunting down and eradicating bugs, and removing duplication inside of certain validation functions resolved this.  

* Initially i had the users score and answer choices at the end of the game to move from the score array to the all scores array, and then clear the score array so there is only 1 copy of the users final score in local storage. This seemed like a good idea at the beginning of this project, but it turns out that i had architected and over-engineered my local storage solution - being able to access the variables again when trying to render a high score table proved to be extremely difficult. In the end, i had to refactor my code and change my implementation of local storage in order to get this to work reliably.

* When working on the high scores table near the end of this project, i had issues with pulling more than 1 users name and score data out of local storage and rendering it on the page. I resolved this by using a for loop to append the name and score pair of each user stored in local storage to the high score page .

* We have only just started learning about jQuery and other third party API's - someday i would like to come back to this project and work on refining it further. Despite the development of this site being really challenging, i had a lot of fun and learnt so much from my mistakes while building this.



## My Development Environment

* MacOS Monterey 
* VScode
* Terminal
* Google Chrome Developer Tools
* Git
* Github


## Languages used

* Javascript
* HTML
* CSS








---


