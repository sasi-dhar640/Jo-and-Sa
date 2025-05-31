const questions = [
  "Never have I ever cried on the first day of school",
  "Never have I ever had an imaginary friend",
  "Never have I ever snuck cookies from the kitchen",
  "Never have I ever been grounded",
  "Never have I ever skipped school",
  "Never have I ever lied to my parents",
  "Never have I ever broken something valuable at home",
  "Never have I ever had a childhood nickname I hated",
  "Never have I ever gotten lost as a kid",
  "Never have I ever had a secret hiding spot",
  "Never have I ever been the teacher's pet",
  "Never have I ever gotten into a fight with a sibling",
  "Never have I ever run away from home",
  "Never have I ever copied someones homework",
  "Never have I ever failed a school subject",
  "Never have I ever had a favorite toy I took everywhere",
  "Never have I ever been afraid of the dark",
  "Never have I ever made a mess and blamed it on someone else",
  "Never have I ever eaten something off the floor",
  "Never have I ever believed in Santa Claus",
  "Never have I ever had a treehouse or secret club",
  "Never have I ever been caught lying",
  "Never have I ever cried during a cartoon",
  "Never have I ever written a letter to Santa",
  "Never have I ever tried to run away from home",
  "Never have I ever locked myself in a room",
  "Never have I ever had a childhood best friend I have lost touch with",
  "Never have I ever been the class clown",
  "Never have I ever cheated on a test",
  "Never have I ever gotten an award at school",
  "Never have I ever been bullied",
  "Never have I ever bullied someone",
  "Never have I ever gotten lost in a supermarket or mall",
  "Never have I ever cried watching a Disney movie",
  "Never have I ever believed in ghosts as a kid",
  "Never have I ever wanted to be a superhero",
  "Never have I ever climbed a tree",
  "Never have I ever eaten glue or something weird as a kid",
  "Never have I ever been in a school play",
  "Never have I ever made a prank call",
  "Never have I ever played dress-up",
  "Never have I ever gotten injured playing",
  "Never have I ever pretended to be sick to skip school",
  "Never have I ever had a favorite cartoon",
  "Never have I ever had a crush on a teacher",
  "Never have I ever gotten stitches",
  "Never have I ever won a prize in school",
  "Never have I ever wished I was someone else",
  "Never have I ever kept a diary",
  "Never have I ever written a love letter",
  "Never have I ever had a crush on someone older",
  "Never have I ever dated someone secretly",
  "Never have I ever had a long-distance relationship",
  "Never have I ever fallen in love at first sight",
  "Never have I ever had my heart broken",
  "Never have I ever broken someones heart",
  "Never have I ever been on a dating app",
  "Never have I ever cheated in a relationship",
  "Never have I ever been cheated on",
  "Never have I ever had a rebound",
  "Never have I ever had a crush on a friend",
  "Never have I ever kissed someone I was not dating",
  "Never have I ever said “I love you” and not meant it",
  "Never have I ever said “I love you” too soon",
  "Never have I ever ghosted someone",
  "Never have I ever been ghosted",
  "Never have I ever gone on a blind date",
  "Never have I ever dated more than one person at once",
  "Never have I ever had a serious relationship",
  "Never have I ever written a love poem",
  "Never have I ever gone on a romantic vacation",
  "Never have I ever kept a relationship a secret",
  "Never have I ever had a crush on a celebrity",
  "Never have I ever flirted with a stranger",
  "Never have I ever been proposed to",
  "Never have I ever proposed to someone",
  "Never have I ever had a mutual breakup",
  "Never have I ever cried after a breakup",
  "Never have I ever stalked an ex online",
  "Never have I ever gone back to an ex",
  "Never have I ever given someone a second chance",
  "Never have I ever lied to a partner",
  "Never have I ever dated someone just to get over someone else",
  "Never have I ever been jealous in a relationship",
  "Never have I ever had a romantic dream about someone I know",
  "Never have I ever kept a love secret from everyone",
  "Never have I ever had a crush on a friends partner",
  "Never have I ever been in love with more than one person at once",
  "Never have I ever gotten back with someone after years apart",
  "Never have I ever planned a future with someone",
  "Never have I ever met someones parents as a partner",
  "Never have I ever lived with a partner",
  "Never have I ever bought a gift for someone I liked but never gave it",
  "Never have I ever been in love but did not tell them",
  "Never have I ever had a secret admirer",
  "Never have I ever had a crush on a coworker",
  "Never have I ever fallen out of love",
  "Never have I ever had someone fall in love with me unexpectedly",
  "Never have I ever written about someone I loved",
  "Never have I ever questioned whether I was truly in love"
];

    // Add more questions as needed

let currentQuestionIndex = -1; // start before first question

// Shuffle the questions
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

// Start button
document.getElementById('startButton').addEventListener('click', () => {
    document.getElementById('game').classList.remove('hidden');
    shuffleQuestions();
    currentQuestionIndex = -1;
    showNextQuestion();
});

// Flip button logic
document.getElementById('flipButton').addEventListener('click', () => {
    const cardInner = document.querySelector('.card-inner');
    cardInner.style.transform = cardInner.style.transform === 'rotateY(360deg)' ? '' : 'rotateY(360deg)';

    setTimeout(() => {
        showNextQuestion();
    }, 1000);
});

// Display the next question
function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        document.getElementById('questionText').innerText = questions[currentQuestionIndex];
    } else {
        alert("You've gone through all the questions!");
        document.getElementById('questionText').innerText = "Game Over!";
    }
}

 const title = document.getElementById("title");

  title.addEventListener("mouseover", () => {
    title.textContent = "Joy & Sad";
  });

  title.addEventListener("mouseout", () => {
    title.textContent = "Jo & Sa";
  });
