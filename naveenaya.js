let startTime = 0;
let interval;
let running = false;

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function updateDisplay() {
  const now = Date.now();
  const elapsed = now - startTime;
  document.getElementById('display').textContent = formatTime(elapsed);
}

document.getElementById('startBtn').addEventListener('click', () => {
  if (!running) {
    running = true;
    startTime = Date.now() - (window.elapsedTime || 0);
    interval = setInterval(updateDisplay, 1000);
  }
});

document.getElementById('stopBtn').addEventListener('click', () => {
  if (running) {
    running = false;
    clearInterval(interval);
    window.elapsedTime = Date.now() - startTime;
  }
});

document.getElementById('resetBtn').addEventListener('click', () => {
  running = false;
  clearInterval(interval);
  document.getElementById('display').textContent = "00:00:00";
  window.elapsedTime = 0;
});
