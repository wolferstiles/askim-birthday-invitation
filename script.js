const questions = [
  {
    question: "💫 Are you emotionally + spiritually prepared for Saturday?",
    options: ["yes...", "uhmm... kinda?", "HELL JAAA EVETTTT 🔥"],
    correct: 2
  },
  {
    question: "🧠 What's the scientifically perfect way to spend your Saturday?",
    options: [
      "Sleeping till Monday zZzZz",
      "Practicing Turkish with Duolingo (hooot!)",
      "Chilling with a suspiciously amazing person (hint: ME 😎)"
    ],
    correct: 2
  },
  {
    question: "🍕 What’s better than White Lotus binge session?",
    options: ["Netflix and... pasta?", "A me-date 😏", "A date with ME (with or without series)"],
    correct: 2
  },
  {
    question: "🎁 What do you get when you mix love, mystery and perfect timing?",
    options: [
      "Vodka Pasta 🍝",
      "A surprise mission from your fav human (me!)",
      "Confused calendar management"
    ],
    correct: 1
  },
  {
    question: "👀 Where should you absolutely NOT be Saturday afternoon?",
    options: ["Doing Duolingo (again??)", "Fighting a goose 🪿", "Anywhere but with me 💔"],
    correct: 2
  },
  {
    question: "💃 What’s the ONLY way to celebrate a birthday right?",
    options: [
      "With dance moves that are borderline crimes",
      "With someone who paints like Picasso (aka me 🧑‍🎨)",
      "Both, obviously. DUH"
    ],
    correct: 2
  },
  {
    question: "🇩🇪 Liebst du mich?",
    options: ["Ich liebe dich, Schatz!", "I love u girl", "geçmiş olsunnnnn"],
    correct: 2
  },
  {
    question: "💌 Final boss: Are you ready for the actual invitation?",
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
    <h2>🎉 Tebrikler, davetiyeye ulaşmaya hak kazandın! 🎉</h2>
    <p>✨ İşte 10 Mayıs planı schatzım ✨</p>
    <ul style="text-align: left; margin-top: 20px;">
      <li><strong>11:30</strong> – Meet with Beril at <strong>Treptower Park</strong>'. (she will send the exact location)</li>
      <li><strong>16:30</strong> – Watching <strong>Konklave</strong> at Cinema! (Movie is in German, you gonna enjoy it alone but no worries, show must go on!)</li>
      <li><strong>19:00</strong> – Romantic Dinner at Beril's House 🍽️</li>
      <li><strong>21:00</strong> – Something you love... 😈💋</li>
    </ul>
    <p>💕 Dress cute. Be hungry. Expect chaos. I got you. 💕</p>
  `;
  message.innerHTML = "";
}

showQuestion();

