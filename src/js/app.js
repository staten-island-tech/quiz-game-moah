/* import { questions } from "./app"; */
const questions = [
  {
    question: "What animal was Tarzan raised by?",
    choiceA: "Wolves",
    choiceB: "Bears",
    choiceC: "Gorillas",
    correct: "C",
    imgSrc: "/* img/question7image.jpeg */",
  },
  {
    question: "Who was the first Disney princess?",
    choiceA: "Snow White",
    choiceB: "Cinderella",
    choiceC: "Mr. Whalen",
    correct: "A",
    imgSrc: "/* img/question8image.png */",
  },
  {
    question:
      "What does the enchanted cake in Brave turn Merida's mother into?",
    choiceA: "A bear",
    choiceB: "A wolf",
    choiceC: "a horse",
    correct: "A",
    imgSrc: "/* img/question9image.jpeg */",
  },
  {
    question: "What year did Disneyland open?",
    choiceA: "1960",
    choiceB: "1940",
    choiceC: "1955",
    correct: "C",
    imgSrc: "/* img/question1image.jpeg */",
  },
  {
    question: "Who trained Hercules to be a hero?",
    choiceA: "Phil/Philoctetes",
    choiceB: "Grover",
    choiceC: "Apollo",
    correct: "A",
    imgSrc: "/* img/question2image.jpeg */",
  },
  {
    question: "What is the name of the toy store in Toy Story 2",
    choiceA: "Al's Toy Barn",
    choiceB: "Toys R Us",
    choiceC: "Steve's Toy Shop",
    correct: "A",
    imgSrc: "/* img/question3image.jpeg */",
  },
  {
    question: "What are the names of Hades minions in Hercules?",
    choiceA: "Anger and Pain",
    choiceB: "Anger and Panic",
    choiceC: "Pain and Panic",
    correct: "C",
    imgSrc: "/* img/question4image.jpeg */",
  },
  {
    question: "What is the name of Ariel and Prince Eric's daughter?",
    choiceA: "Diana",
    choiceB: "Melody",
    choiceC: "Symphony",
    correct: "B",
    imgSrc: "/* img/question5image.jpeg */",
  },
  {
    question: "What's the name of Belle's father in 'Beauty and the Beast'?",
    choiceA: "Louise",
    choiceB: "Gustave",
    choiceC: "Maurice",
    correct: "C",
    imgSrc: "/* img/question6image.jpg */",
  },

  {
    question: "What is the name of Goofy's son?",
    choiceA: "Josh",
    choiceB: "Max",
    choiceC: "Sam",
    correct: "B",
    imgSrc: "/* img/question10image.jpeg */",
  },
];
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImage");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const scoreDiv = document.getElementById("score");
const progress = document.getElementById("progress");
const resetButton = document.getElementById("reset");
const getAnswer = document.getElementById("answers-button");
const answerList = document.getElementById("answers");

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
// const init = function () {
//   questions.forEach((question) =>
//     quizContainer.insertAdjacentHTML(
//       "beforeend",
//       `
//       <div id="question-container" class="hide">
//       <div id="question">${question.question}</div>
//       <div id="answer-buttons" class="btn-grid">
//           <button class="first-choice btn">${question.choice1}</button>
//           <button class="second-choice btn">${question.choice2}</button>
//           <button class="third-choice btn">${question.choice3}</button>
//       </div>
//   </div>
//   <div class="controls">
//       <button id="next-btn" class="next-btn btn">Next</button>
//   `
//     )
//   );
// };
