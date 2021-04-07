console.log("Connected");

DOMSelectors = {
  displayContainer: document.querySelector(),
};

const questions = [
  {
    questionContent: "Are you more independent or dependent?",
    choices: [
      {
        choice: "Independent",
        value: 1,
      },
      {
        choice: "Dependent",
        value: 0,
      },
    ],
  },
  {
    questionContent: "What is your favorite food?",
    choices: [
      {
        choice: "Gravy",
        value: 1,
      },
      {
        choice: "Steak",
        value: 3,
      },
      {
        choice: "Rice",
        value: 5,
      },
    ],
  },
  {
    questionContent: "What is your favorite color out of these three?",
    choices: [
      {
        choice: "Blue",
        value: 5,
      },
      {
        choice: "Red",
        value: 1,
      },
      {
        choice: "Yellow",
        value: 3,
      },
    ],
  },
  {
    questionContent: "When confronted with danger I...",
    choices: [
      {
        choice: "Listen to music",
        value: 5,
      },
      {
        choice: "Talk it out",
        value: 3,
      },
      {
        choice: "Drive away",
        value: 1,
      },
    ],
  },
  {
    questionContent: "What is your favorite season?",
    choices: [
      {
        choice: "Summer",
        value: 5,
      },
      {
        choice: "Spring",
        value: 3,
      },
      {
        choice: "Fall",
        value: 1,
      },
      {
        choice: "Winter",
        value: 0,
      },
    ],
  },
  {
    questionContent: "The most important quality in a person is:",
    choices: [
      {
        choice: "Honesty",
        value: 5,
      },
      {
        choice: "Bravery",
        value: 3,
      },
      {
        choice: "Respect",
        value: 1,
      },
    ],
  },
  {
    questionContent: "My preferred method of transport is:",
    choices: [
      {
        choice: "Plane",
        value: 5,
      },
      {
        choice: "Walking",
        value: 3,
      },
      {
        choice: "Car",
        value: 1,
      },
    ],
  },
  {
    questionContent: "I'd like to visit:",
    choices: [
      {
        choice: "Saudi Arabia",
        value: 5,
      },
      {
        choice: "Africa",
        value: 3,
      },
      {
        choice: "Arizona",
        value: 1,
      },
    ],
  },
  {
    questionContent: "What do you like to do in your free time:",
    choices: [
      {
        choice: "Play with my pets",
        value: 5,
      },
      {
        choice: "Hang out with friends",
        value: 3,
      },
      {
        choice: "Go for a nice drive",
        value: 1,
      },
    ],
  },
  {
    questionContent: "Which of these outfits would you wear",
    choices: [
      {
        choice: "Dress or Suit",
        value: 5,
      },
      {
        choice: "Fuzzy sweater",
        value: 3,
      },
      {
        choice: "A tracksuit",
        value: 1,
      },
    ],
  },
];

const init = function () {
  const displayItems = menu.forEach(
    (filler) => DOMSelectors.displayContainer.insertAdjacentHTML
  );
};
