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
let runningQuestion = 0; //current questions index which will be changed by 1
let quizScore = 0; //starting score

function renderQuestion() {
  let q = questions[runningQuestion]; //basically declaring a variable that has grabs the index of the running question from the questions array
  question.innerHTML = "<p>" + q.question + "</p>"; //adding each question that is asked from the
  qImg.innerHTML = "<img src=" + q.imgSrc + ">"; // adding images based on each index from the array
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

//listen for a click event on the startQuiz container and then this activates the startQuiz function

function startQuiz() {
  start.style.display = "none"; // make the startQuiz container dissapear
  renderQuestion(); // make the question appear on screen
  quiz.style.display = "block"; //make the quiz container appear
  renderProgress(); // make the progress circles appear
}
start.addEventListener("click", startQuiz);
console.log(questions.length);

function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

function checkAnswer(event) {
  if (event.target.id === questions[runningQuestion].correct) {
    // answer is correct
    quizScore++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }

  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score

    scoreRender();
    clearInterval(quiz);
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
  scoreDiv.style.display = "block";
  resetButton.style.display = "grid";
  getAnswer.style.display = "grid";
  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * quizScore) / questions.length);

  // choose the image based on the scorePerCent

  scoreDiv.innerHTML =
    "<p> You got " +
    scorePerCent +
    "%!!! To retake, click the Reset Button! To look at the right answers press the Answers button and scroll down</p>";
}

function refreshPage() {
  window.location.reload();
}

function answerRender() {
  getAnswer.style.display = "none";
  answerList.style.display = "block";
}

choiceA.addEventListener("click", checkAnswer);
choiceB.addEventListener("click", checkAnswer);
choiceC.addEventListener("click", checkAnswer);
resetButton.addEventListener("click", refreshPage);
getAnswer.addEventListener("click", answerRender);
