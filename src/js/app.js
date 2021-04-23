import { questions } from "./questions";
import {
  start,
  quiz,
  question,
  qImg,
  choiceA,
  choiceB,
  choiceC,
  scoreDiv,
  progress,
  resetButton,
  getAnswer,
  answerList,
} from "./questions";

const lastQuestion = questions.length - 1; //index of the last question
let runningQuestion = 0; //current questions index which will be incremented by 1
let quizScore = 0; //starting score

function renderQuestion() {
  let q = questions[runningQuestion]; //basically declaring a variable that grabs the index of the running question from the questions array
  question.innerHTML = "<p>" + q.question + "</p>"; //showing each question on screen based on the index of the current question. yes this is bad practice since two variables are the same, im sorry.
  qImg.innerHTML = "<img src=" + q.imgSrc + ">"; // adding images based on each index from the array
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

//listen for a click event on the startQuiz container and then this activates the startQuiz function

function startQuiz() {
  start.style.display = "none"; // make the startQuiz container dissapear
  renderQuestion(); // run renderQuestion function, makes the question appear on screen
  quiz.style.display = "block"; //make the quiz container appear
  renderProgress(); // make the progress circles appear by running renderProgress function
}
start.addEventListener("click", startQuiz); //listen for click then run the startQuiz function

function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    //let the qIndex equal zero, if the qIndex is less than the last question index then add 1 to qIndex. this loops and creates progress circles for each question until the qIndex is equal to lastQuestion index
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>"; //creates circles for each of the 10 questions, there will be 10 qIndexs since its in a for loop.
  }
}

function checkAnswer(event) {
  if (event.target.id === questions[runningQuestion].correct) {
    // if the id of the question.correct is equal to what the user clicks on then...
    // the answer is correct and add 1 to quizScore
    quizScore++;
    // change progress color to green by running answerisCorrect function
    answerIsCorrect();
  } else {
    // if the user click id is not equal to the right answer, the answer is wrong
    // change progress color to red by running answerIsWrong function
    answerIsWrong();
  }

  if (runningQuestion < lastQuestion) {
    // this is to check whether we are done with the quiz. if the runningQuestion index is less than lastQuestion index then...
    runningQuestion++; //add one to runningQuestion index
    renderQuestion(); //render the next question by running the renderQuestion function
  } else {
    //if the inequality is false then we end the quiz and display the score by running the scoreRender function

    scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0"; //get the id of the progress circle based on the runningQuestion index and change its color to green if its right
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00"; //get the id of the progress circle based on the runningQuestion index and change its color to red if its wrong
}

// score render
function scoreRender() {
  scoreDiv.style.display = "block"; //change display from none to block when you run the function
  resetButton.style.display = "grid"; // just something to make the button placement easier
  getAnswer.style.display = "grid"; //getAnswer button placement to grid
  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * quizScore) / questions.length); //calculate the user score percentage to display

  scoreDiv.innerHTML =
    "<p> You got " +
    scorePerCent +
    "%!!! To retake, click the Reset Button! To look at the right answers press the Answers button and scroll down</p>";
}

function refreshPage() {
  window.location.reload();
} //function that refreshes the page

function answerRender() {
  getAnswer.style.display = "none";
  answerList.style.display = "block";
} //make the button dissapear and the asnwer list appear

choiceA.addEventListener("click", checkAnswer);
choiceB.addEventListener("click", checkAnswer);
choiceC.addEventListener("click", checkAnswer);
resetButton.addEventListener("click", refreshPage); //on click refresh the page
getAnswer.addEventListener("click", answerRender); // on click make the button dissapear and show the answers
