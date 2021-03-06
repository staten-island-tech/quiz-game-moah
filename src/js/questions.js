const questions = [
  {
    question: "What animal was Tarzan raised by?",
    choiceA: "Wolves",
    choiceB: "Bears",
    choiceC: "Gorillas",
    correct: "C",
    imgSrc: "",
  },
  {
    question: "Who was the first Disney princess?",
    choiceA: "Snow White",
    choiceB: "Cinderella",
    choiceC: "Mr. Whalen",
    correct: "A",
    imgSrc: "",
  },
  {
    question:
      "What does the enchanted cake in Brave turn Merida's mother into?",
    choiceA: "A bear",
    choiceB: "A wolf",
    choiceC: "a horse",
    correct: "A",
    imgSrc: "",
  },
  {
    question: "What year did Disneyland open?",
    choiceA: "1960",
    choiceB: "1940",
    choiceC: "1955",
    correct: "C",
    imgSrc: "",
  },
  {
    question: "Who trained Hercules to be a hero?",
    choiceA: "Phil/Philoctetes",
    choiceB: "Grover",
    choiceC: "Apollo",
    correct: "A",
    imgSrc: "",
  },
  {
    question: "What is the name of the toy store in Toy Story 2",
    choiceA: "Al's Toy Barn",
    choiceB: "Toys R Us",
    choiceC: "Steve's Toy Shop",
    correct: "A",
    imgSrc: "",
  },
  {
    question: "What are the names of Hades minions in Hercules?",
    choiceA: "Anger and Pain",
    choiceB: "Anger and Panic",
    choiceC: "Pain and Panic",
    correct: "C",
    imgSrc: "",
  },
  {
    question: "What is the name of Ariel and Prince Eric's daughter?",
    choiceA: "Diana",
    choiceB: "Melody",
    choiceC: "Symphony",
    correct: "B",
    imgSrc: "",
  },
  {
    question: "What's the name of Belle's father in 'Beauty and the Beast'?",
    choiceA: "Louise",
    choiceB: "Gustave",
    choiceC: "Maurice",
    correct: "C",
    imgSrc: "",
  },

  {
    question: "What is the name of Goofy's son?",
    choiceA: "Josh",
    choiceB: "Max",
    choiceC: "Sam",
    correct: "B",
    imgSrc: "",
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
export { questions };
export {
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
};
