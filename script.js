const questions = [
  {
    question: "💫 Are you ready for Saturday?",
    options: ["Yes", "Uhm... yes??", "HELL JAAA EVETTTT"],
    correct: 2
  },
  {
    question: "🧠 What is the scientifically proven best way to spend a Saturday?",
    options: [
      "Going library and studying Turkish bcz I need to be PRO",
      "Sleeping until Monday",
      "Hanging out with someone suspiciously amazing (a.k.a. me)"
    ],
    correct: 2
  },
  {
    question: "🍕 What’s better than watching White Lotus on a Saturday?",
    options: ["A date with me (with or without series)", "having naughty time", "chill and have a duck time"],
    correct: 0
  },
  {
    question: "🎁 What do you get when you mix love, a bit of mystery, and good timing?",
    options: ["A surprise plan from your favorite person", "A confusing time to choose date-place", "A Vodka Pasta"],
    correct: 0
  },
  {
    question: "👀 Where should you absolutely not be at early afternoon on Saturday?",
    options: ["Doing Dualingo", "Fighting a goose", "Anywhere else but with me"],
    correct: 2
  },
  {
    question: "💃 How should one celebrate a birthday the right way?",
    options: [
      "Surrounded by glitter and questionable dance moves",
      "With someone who paints better than Picasso (me, obviously)",
      "All of the above"
    ],
    correct: 2
  },
  {
    question: "Liebst du mich?",
    options: ["Ich liebe dich schatz!", "i love u girl", "geçmiş olsun"],
    correct: 2
  },
  {
    question: "💌 Ready for your actual invitation? But first… choose wisely.",
    options: ["Yes, I’m ready!", "I was born ready.", "Is this a trap?"],
    correct: "any"
  }
];

let current = 0;
const container = document.getElementById("question-container");
const message = document.getElementById("message");

function showQuestion() {
document.getElementById("title").style.display = "none";
  const q = questions[current];
  container.innerHTML = `<h2>${q.question}</h2>`;
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(idx);
    container.appendChild(btn);
  });
}

function checkAnswer(index) {
  const q = questions[current];
  if (q.correct === "any" || index === q.correct) {
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      container.innerHTML = "<h2>🎉 You did it! See you Saturday... 💖</h2>";
      message.innerHTML = "<p>✨ Dress nice. Expect fun. Be hungry. I got you. ✨</p>";
    }
  } else {
    alert("Oops! That's not quite it... Try again 🧐");
  }
}

showQuestion();
