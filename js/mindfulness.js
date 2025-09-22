let breathInterval;
let sessionTimeout;

function startBreathing() {
  stopBreathing(); // reset if already running

  const circle = document.getElementById("breathCircle");
  const instruction = document.getElementById("instructionText");
  const duration = parseInt(document.getElementById("duration").value);

  function breathingCycle() {
    instruction.textContent = "Breathe In...";
    circle.style.transform = "scale(1.2)"; // smaller expansion
    setTimeout(() => {
      instruction.textContent = "Hold...";
      setTimeout(() => {
        instruction.textContent = "Breathe Out...";
        circle.style.transform = "scale(1)";
      }, 4000);
    }, 4000);
  }

  breathingCycle();
  breathInterval = setInterval(breathingCycle, 12000);

  sessionTimeout = setTimeout(() => {
    stopBreathing();
    instruction.textContent = "Session Complete 🙏";
  }, duration * 1000);
}

function stopBreathing() {
  clearInterval(breathInterval);
  clearTimeout(sessionTimeout);
  const circle = document.getElementById("breathCircle");
  const instruction = document.getElementById("instructionText");
  circle.style.transform = "scale(1)";
  instruction.textContent = "Session stopped ❌";
}

/* ---- Ambient Sounds ---- */
function playSound(type) {
  stopSound();
  document.getElementById(type + "Sound").play();
}
function stopSound() {
  ["forestSound", "oceanSound", "rainSound"].forEach(id => {
    const audio = document.getElementById(id);
    audio.pause();
    audio.currentTime = 0;
  });
}
