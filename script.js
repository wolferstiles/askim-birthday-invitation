const questions = [
  {
    question: "<strong>💫 Are you emotionally + spiritually prepared for Saturday?</strong>",
    options: ["yes...", "uhmm... kinda?", "HELL JAAA EVETTTT 🔥"],
    correct: 2
  },
  {
    question: "<strong>🧠 What's the scientifically perfect way to spend your Saturday?</strong>",
    options: [
      "Sleeping till Monday zZzZz",
      "Practicing Turkish with Duolingo (hooot!)",
      "Chilling with a suspiciously amazing person (hint: ME 😎)"
    ],
    correct: 2
  },
  {
    question: "<strong>🍕 What’s better than White Lotus binge session?</strong>",
    options: ["Netflix and... pasta?", "A me-date 😏", "A date with ME (with or without series)"],
    correct: 2
  },
  {
    question: "<strong>🎁 What do you get when you mix love, mystery and perfect timing?</strong>",
    options: [
      "Vodka Pasta 🍝",
      "A surprise mission from your fav human (me!)",
      "Confused calendar management"
    ],
    correct: 1
  },
  {
    question: "<strong>👀 Where should you absolutely NOT be Saturday afternoon?</strong>",
    options: ["Doing Duolingo (again??)", "Fighting a goose 🪿", "Anywhere but with me 💔"],
    correct: 2
  },
  {
    question: "<strong>💃 What’s the ONLY way to celebrate a birthday right?</strong>",
    options: [
      "With dance moves that are borderline crimes",
      "With someone who paints like Picasso (aka me 🧑‍🎨)",
      "Both, obviously. DUH"
    ],
    correct: 2
  },
  {
    question: "<strong>🇩🇪 Liebst du mich?</strong>",
    options: ["Ich liebe dich, Schatz!", "I love u girl", "geçmiş olsunnnnn"],
    correct: 2
  },
  {
    question: "<strong>💌 Final boss: Are you ready for the actual invitation?</strong>",
    options: ["Yes I’m SO READY", "I was born ready 🐣", "Wait... is this a trap??"],
    correct: "any"
  }
];

let current = 0;
const container = document.getElementById("question-container");
const message = document.getElementById("message");

function showQuestion() {
  if (current === 0) {
    document.getElementById("title").style.display = "none";
  }

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
    message.innerHTML = "";
    if (current < questions.length) {
      showQuestion();
    } else {
      showFinalMessage();
    }
  } else {
    message.innerHTML = `💔 Schaty you better try it agaiiinn 😈`;
  }
}

function showFinalMessage() {
  container.innerHTML = `
    <h2>🎉 Congrats, you’ve earned the invite! 🎉</h2>
    <p>✨ Here’s the super exclusive 10th of May plan, my love! ✨</p>
    <ul style="text-align: left; margin-top: 20px;">
      <li><strong>11:30 AM</strong> – Meet Beril at <strong>Treptower Park</strong> (she’ll send you the exact location).</li>
      <li><strong>4:30 PM</strong> – Watch <strong>Konklave</strong> at the cinema!! (It's in German, don't worry – you'll watch it solo... but it’s not even over yet!!) 🎬</li>
      <li><strong>7:00 PM</strong> – Have a lovely dinner at Beril’s home 🍽️ (come straight from the movie).</li>
      <li><strong>9:00 PM</strong> – Something you love... 😈💋</li>
    </ul>
    <p>💕 Dress sharp. Bring your appetite. Expect chaos. I’ve got you covered. 💕</p>
  `;
  message.innerHTML = "";
}

showQuestion();
