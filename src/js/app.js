const quizContainer = document.getElementsByClassName("container");
const start = document.getElementById("start");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const scoreContainer = document.getElementById("scoreContainer");
const qImg = document.getElementById("qImage");
const progress = document.getElementById("progress");

const questions = [
  {
    questionContent: "What year did Disneyland open?",
    choiceA: "1960",
    choiceB: "1940",
    choiceC: "1955",
    correct: "C",
    imgSrc: "",
  },
  {
    questionContent: "Who trained Hercules to be a hero?",
    choiceA: "Phil/Philoctetes",
    choiceB: "Grover",
    choiceC: "Apollo",
    correct: "A",
    imgSrc: "",
  },
  {
    questionContent: "What is the name of the toy store in Toy Story 2",
    choiceA: "Al's Toy Barn",
    choiceB: "Toys R Us",
    choiceC: "Steve's Toy Shop",
    correct: "A",
    imgSrc: "",
  },
  {
    questionContent: "What are the names of Hades minions in Hercules?",
    choiceA: "Disgust and Contempt",
    choiceB: "Anger and Anxiety",
    choiceC: "Pain and Panic",
    correct: "C",
    imgSrc: "",
  },
  {
    questionContent: "What is the name of Ariel and Prince Eric's daughter?",
    choiceA: "Diana",
    choiceB: "Melody",
    choiceC: "Celeste",
    correct: "B",
    imgSrc: "",
  },
  {
    questionContent:
      "What's the name of Belle's father in 'Beauty and the Beast'?",
    choiceA: "Timothy",
    choiceB: "Diego",
    choiceC: "Maurice",
    correct: "C",
    imgSrc: "",
  },
  {
    questionContent: "What animal was Tarzan raised by?",
    choiceA: "Wolves",
    choiceB: "Bears",
    choiceC: "Gorillas",
    correct: "C",
    imgSrc: "",
  },
  {
    questionContent: "Who was the first Disney princess?",
    choiceA: "Snow White",
    choiceB: "Cinderella",
    choiceC: "Mr. Whalen",
    correct: "A",
    imgSrc: "",
  },
  {
    questionContent:
      "What does the enchanted cake in Brave turn Merida's mother into?",
    choiceA: "A bear",
    choiceB: "A dog",
    choiceC: "a cat",
    correct: "A",
    imgSrc: "",
  },
  {
    questionContent: "What is the name of Goofy's son?",
    choiceA: "Josh",
    choiceB: "Max",
    choiceC: "Sam",
    correct: "B",
    imgSrc: "",
  },
];

const lastQuestion = questions.length - 1;
const runningQuestion = 0;
let score = 0;

function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  container.style.display = "block";
}

function renderQuestion() {
  const q = questions[runningQuestion];
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  question.innerHTML = "<p>" + q.questionContent + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}
renderQuestion();
start.addEventListener("click", startQuiz);

function renderProgress() {
  for (const qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "green";
}
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "red";
}

function checkAnswer(answer) {
  if (questions[runningQuestion].correct) {
    score++;
    answerIsCorrect();
  } else {
    answerIsWrong();
  }
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    questionRender();
  } else {
    scoreRender();
  }
}
function scoreRender() {
  scoreContainer.style.display = "block";
  const scorePerCent = Math.round((100 * score) / questions.length);
}
// const init = function () {
//   questions.forEach((question) =>
//     quizContainer.insertAdjacentHTML(
//       "beforeend",
//       `
//       <div id="question-container" class="hide">
//       <div id="question">${question.questionContent}</div>
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
