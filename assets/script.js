console.log('hello')

var story = document.getElementById("story");
var siteFooter = document.getElementById("siteFooter");
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var yourAnswer = document.getElementById ("yourAnswer");
var submit = document.getElementById ("submit");


// Make an empty array called answers
var answers = [];


//Listen for clicks on the submit button and call the getAnswer() function when they happen
submit.addEventListener("click", getAnswer);

//Call the function to ask the first question 
askQuestion(0);

//askQuestion() asks a question, based on the number passed to it
function askQuestion (questionNumber) {
    answer.style.display = "block";
    answers.length = questionNumber;

    switch (questionNumber) {
        case 0 : 
                question.innerHTML = "Are you ready to play?";
        case 1 : 
                question.innerHTML = "Go to Mars, or stay home?";
        case 2 :
                question.innerHTML = "Risk it, or go home.";
        default: 
                break;                          
    }
}


//getAnswer() gets the answer from the text field and pushes it into the answers array, then calls the continueStory() function
function getAnswer(){
    cleanInput = yourAnswer.ariaValueMax.toUpperCase ();
    answers.push(cleanInput);
    yourAnswer.value = "";
    continueStory(answers.length -1);
}

//continueStory() displays part of the story or an error based on the value of an item in the answers array
function continueStory(answerNumber) {}

//theEnd() ends the story and hides the input field
function theEnd() {}