function unlock() {
  let pass = document.getElementById("pass").value;

  if (pass === "missyou") {
    document.getElementById("lock").style.display = "none";
    document.getElementById("menu").style.display = "block";
  } else {
    alert("wrong password 💔");
  }
}

const messages = {
  miss: `hey you 💌

i miss you too.
please take care of yourself 🌿

“Jeremiah 31:3 — I have loved you with an everlasting love.”`,

  sad: `hey… it’s okay 💔

you are not alone.
this will pass.

“Psalm 34:18 — The Lord is close to the brokenhearted.”`,

  tired: `you’ve been trying so hard 😴

rest now.
you deserve it.

“Matthew 11:28 — I will give you rest.”`,

  happy: `i’m so happy you’re happy 🎉

keep shining 💚

“Psalm 118:24 — This is the day the Lord has made.”`,

  proud: `i’m proud of you 🌿

even small progress matters.

“Philippians 4:13 — I can do all things.”`,

  alone: `you are not alone 🌙

ever.

“Hebrews 13:5 — I will never leave you.”`
};

function openLetter(type) {
  document.getElementById("menu").style.display = "none";
  document.getElementById("letter").style.display = "block";
  document.getElementById("text").innerText = messages[type];
}

function openSecret() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("letter").style.display = "block";
  document.getElementById("text").innerText =
  `you found the hidden letter 💌

you are deeply loved and valued 🌿`;
}

function back() {
  document.getElementById("letter").style.display = "none";
  document.getElementById("menu").style.display = "block";
}
