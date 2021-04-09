const quizContainer = document.getElementsByClassName("container");
const start = document.getElementById("start");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const scoreContainer = document.getElementById("scoreContainer");
console.log(quizContainer);

const questions = [
  {
    questionContent: "Are you more independent or dependent?",
    choices: [
      {
        choice1: "Independent",
        value: 1,
      },
      {
        choice2: "Dependent",
        value: 0,
      },
    ],
  },
  {
    questionContent: "What is your favorite food?",
    choices: [
      {
        choice1: "Gravy",
        value: 1,
      },
      {
        choice2: "Steak",
        value: 3,
      },
      {
        choice3: "Rice",
        value: 5,
      },
    ],
  },
  {
    questionContent: "What is your favorite color out of these three?",
    choices: [
      {
        choice1: "Blue",
        value: 5,
      },
      {
        choice2: "Red",
        value: 1,
      },
      {
        choice3: "Yellow",
        value: 3,
      },
    ],
  },
  {
    questionContent: "When confronted with danger I...",
    choices: [
      {
        choice1: "Listen to music",
        value: 5,
      },
      {
        choice2: "Talk it out",
        value: 3,
      },
      {
        choice3: "Drive away",
        value: 1,
      },
    ],
  },
  {
    questionContent: "What is your favorite season?",
    choices: [
      {
        choice1: "Summer",
        value: 5,
      },
      {
        choice2: "Spring",
        value: 3,
      },
      {
        choice3: "Fall",
        value: 1,
      },
    ],
  },
  {
    questionContent: "The most important quality in a person is:",
    choices: [
      {
        choice1: "Honesty",
        value: 5,
      },
      {
        choice2: "Bravery",
        value: 3,
      },
      {
        choice3: "Respect",
        value: 1,
      },
    ],
  },
  {
    questionContent: "My preferred method of transport is:",
    choices: [
      {
        choice1: "Plane",
        value: 5,
      },
      {
        choice2: "Walking",
        value: 3,
      },
      {
        choice3: "Car",
        value: 1,
      },
    ],
  },
  {
    questionContent: "I'd like to visit:",
    choices: [
      {
        choice1: "Saudi Arabia",
        value: 5,
      },
      {
        choice2: "Africa",
        value: 3,
      },
      {
        choice3: "Arizona",
        value: 1,
      },
    ],
  },
  {
    questionContent: "What do you like to do in your free time:",
    choices: [
      {
        choice1: "Play with my pets",
        value: 5,
      },
      {
        choice2: "Hang out with friends",
        value: 3,
      },
      {
        choice3: "Go for a nice drive",
        value: 1,
      },
    ],
  },
  {
    questionContent: "Which of these outfits would you wear",
    choices: [
      {
        choice1: "Dress or Suit",
        value: 5,
      },
      {
        choice2: "Fuzzy sweater",
        value: 3,
      },
      {
        choice3: "A tracksuit",
        value: 1,
      },
    ],
  },
];

const init = function () {
  questions.forEach((question) =>
    quizContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div id="question-container" class="hide">
      <div id="question">${question.questionContent}</div>
      <div id="answer-buttons" class="btn-grid">
          <button class="first-choice btn">${question.choice1}</button>
          <button class="second-choice btn">${question.choice2}</button>
          <button class="third-choice btn">${question.choice3}</button>
      </div>
  </div>
  <div class="controls">
      <button id="next-btn" class="next-btn btn">Next</button>
  `
    )
  );
};
init();
