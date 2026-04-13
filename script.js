let currentLetter = "";

/* 💚 track opened letters */
let opened = {
  miss: false,
  sad: false,
  tired: false,
  happy: false,
  proud: false,
  alone: false
};

/* 🔐 passwords per letter */
const passwords = {
  miss: "missyou",
  sad: "cry",
  tired: "rest",
  happy: "smile",
  proud: "proud",
  alone: "lonely",
  secret: "openme"
};

/* 💌 messages (your polished version) */
const messages = {
  miss: `
I miss you too 💚

Missing someone means you loved deeply—and that is never a weakness. Even if distance exists, love and care don’t disappear.

Take a deep breath. You are still surrounded by love in ways you cannot always see.

“Be strong and courageous… for the Lord your God goes with you.” — Deuteronomy 31:6

Reminder: It’s okay to miss people, but don’t forget yourself in the process. You matter too.
  `,

  sad: `
I’m really sorry you feel this way 💔

You don’t always have to be okay. You are allowed to feel everything. Sadness is not your identity—it is just a passing season.

And even if it feels heavy right now, it will not stay forever.

“The Lord is close to the brokenhearted.” — Psalm 34:18

Reminder: You are not a burden. You are deeply loved even in your lowest moments.
  `,

  tired: `
You’ve been doing your best 😴

You are allowed to rest without guilt. You do not need to earn rest. Even machines break if they never stop—how much more a human heart?

“Come to me, all who are weary, and I will give you rest.” — Matthew 11:28

Reminder: Rest is part of healing, not failure.
  `,

  happy: `
I’m so happy for you ✨

Hold onto this feeling gently. You deserve joy without guilt. Not every day has to be hard.

“This is the day the Lord has made; let us rejoice.” — Psalm 118:24

Reminder: Happiness is not something you need to deserve—it is something you are allowed to feel.
  `,

  proud: `
I am so proud of you 🌿

Even the small things you think no one notices—they matter. You are growing in ways you don’t always see yet.

“Whatever you do, work at it with all your heart.” — Colossians 3:23

Reminder: You are becoming stronger every day, even in silence.
  `,

  alone: `
You are not alone 🌙

Even in silence, even when it feels empty, you are seen and cared for. Loneliness is a feeling, not a truth.

“Be strong and courageous… the Lord your God is with you wherever you go.” — Joshua 1:9

Reminder: You are never truly alone.
  `,

  secret: `
This is your reminder 💌

You are doing better than you think. You don’t need to rush your healing or compare your journey to others.

“For I know the plans I have for you,” declares the Lord — Jeremiah 29:11

Reminder: You are still becoming something beautiful.
  `
};

/* 🔒 open lockscreen */
function openLock(type) {
  currentLetter = type;
  document.getElementById("lockscreen").style.display = "flex";
}

/* 🔑 check password */
function checkPassword() {
  const input = document.getElementById("lockinput");
  const box = document.getElementById("lockbox");

  if (input.value === passwords[currentLetter]) {

    // 🔊 sound
    const sound = document.getElementById("unlockSound");
    if (sound) sound.play();

    document.getElementById("lockscreen").style.display = "none";

    if (opened[currentLetter] !== undefined) {
      opened[currentLetter] = true;
    }

    openLetter(currentLetter);

  } else {
    box.classList.add("shake");
    setTimeout(() => box.classList.remove("shake"), 300);
  }
}

/* ✨ typing effect */
function typeText(text, element, speed = 18) {
  element.innerHTML = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

/* 💌 open letter */
function openLetter(type) {
  document.getElementById("menu").style.display = "none";
  document.getElementById("letter").style.display = "block";

  const paper = document.getElementById("paper");
  typeText(messages[type], paper);

  // 🎵 background music
  const music = document.getElementById("music");
  if (music) music.play();

  checkFinalSecret();
}

/* 🔙 back */
function back() {
  document.getElementById("letter").style.display = "none";
  document.getElementById("menu").style.display = "block";
}

/* 💌 unlock final secret if all opened */
function checkFinalSecret() {
  const allOpened = Object.values(opened).every(v => v === true);

  if (allOpened) {
    messages.secret = `
💌 FINAL LETTER

You opened everything…

and I just want you to know:

I’m proud of you for staying until the end.

Even in real life, please keep going gently.

You are not behind. You are becoming.

“Jeremiah 29:11”
    `;
  }
}
