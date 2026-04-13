* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Patrick Hand', cursive;
  background: #e8efe6;
  overflow-x: hidden;
}

/* background */
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, #f4f8f2, #dbe7d7);
  z-index: -1;
}

/* layout */
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  gap: 15px;
}

h1 {
  color: #3b4b3b;
}

/* boxes */
.card, .menu, .letter {
  width: 90%;
  max-width: 360px;
  background: #f4f8f2;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

/* input */
input {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #aaa;
  font-family: inherit;
}

/* buttons */
button {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-radius: 12px;
  background: #5f7a5f;
  color: white;
  cursor: pointer;
  font-family: inherit;
  transition: 0.2s;
}

button:hover {
  transform: scale(1.03);
}

/* menu hidden */
.menu {
  display: none;
}

/* letter */
.letter {
  display: none;
  min-height: 200px;
  line-height: 1.6;
  font-size: 18px;
}

/* hearts */
.hearts span {
  position: absolute;
  bottom: -50px;
  font-size: 20px;
  animation: float 8s linear infinite;
}

.hearts span:nth-child(1){ left: 10%; }
.hearts span:nth-child(2){ left: 30%; animation-delay: 2s; }
.hearts span:nth-child(3){ left: 50%; animation-delay: 1s; }
.hearts span:nth-child(4){ left: 70%; animation-delay: 3s; }
.hearts span:nth-child(5){ left: 90%; animation-delay: 4s; }

@keyframes float {
  0% { transform: translateY(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(-900px); opacity: 0; }
}
