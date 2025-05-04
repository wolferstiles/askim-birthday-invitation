const questions = [
  {
    question: "<strong>💫 Are you emotionally + spiritually prepared for Saturday?</strong>",
    options: ["<strong>yes...", "<strong>uhmm... kinda?", "<strong>HELL JAAA EVETTTT 🔥</strong>"],
    correct: 2
  },
  {
    question: "<strong>🧠 What's the scientifically perfect way to spend your Saturday?</strong>",
    options: [
      "Sleeping till Monday zZzZz",
      "Practicing Turkish in Library",
      "<strong>Chilling with a suspiciously amazing person (hint: ME 😎)</strong>"
    ],
    correct: 1
  },
  {
    question: "<strong>🍕 What’s better than White Lotus binge session?</strong>",
    options: ["<strong>Netflix and... yoguth pasta?", "<strong>A me-date 😏</strong>", "<strong>A date with ME (with or without series)</strong>"],
    correct: 2
  },
  {
    question: "<strong>🎁 What do you get when you mix love, mystery and perfect timing?</strong>",
    options: [
      "<strong>Vodka Pasta 🍝",
      "<strong>A surprise mission from your fav human (me!)</strong>",
      "<strong>Confused calendar management"
    ],
    correct: 0
  },
  {
    question: "<strong>👀 Where should you absolutely NOT be Saturday afternoon?</strong>",
    options: ["<strong>Doing Duolingo (do not let streak die pls)", "<strong>Fighting a goose 🪿", "<strong>Anywhere but with me 💔</strong>"],
    correct: 2
  },
  {
    question: "<strong>💃 What’s the ONLY way to celebrate a birthday right?</strong>",
    options: [
      ">strong>Twearking and lap dancing to Beril",
      "<strong>With someone who paints like Picasso (aka me 🧑‍🎨)</strong>",
      "<strong>Both, obviously. DUH"
    ],
    correct: 0
  },
  {
    question: "<strong>🇩🇪 Liebst du mich?</strong>",
    options: ["Ich liebe dich, Schatz!", "I love u girl", "<strong>geçmiş olsunnnnn</strong>"],
    correct: 2
  },
  {
    question: "<strong>💌 Final boss: Are you ready for the actual invitation?</strong>",
    options: ["Yes I’m SO READY", "I was born ready 🐣", "<strong>Wait... is this a trap??</strong>"],
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
    btn.innerHTML = opt;
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
      <li><strong>4:30 PM</strong> – Watch <strong>Konklave</strong> at the cinema!! (It’s in German, but don’t worry, you’ll watch it solo... but it’s not even over yet!) 🎬</li>
      <li><strong>7:00 PM</strong> – Have a lovely dinner at Beril’s home 🍽️ (come straight from the movie).</li>
      <li><strong>9:00 PM</strong> – Something you love... glukglukglukglukgluk 😈💋</li>
    </ul>
    <p>💕 Dress sharp. Bring your appetite. Expect chaos. I’ve got you covered. 💕</p>
  `;
  message.innerHTML = "";
}

showQuestion();
