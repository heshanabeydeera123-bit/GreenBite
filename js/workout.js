// workout.js
// Complete workout timer + queue logic
// Paste into js/workout.js and ensure workout.html includes: <script src="js/workout.js"></script>

(() => {
  // Example exercises database (name, bodyPart, equipment, durationSeconds)
  const EXERCISES = [
    { name: "Jumping Jacks", body: "full", equipment: "none", duration: 30 },
    { name: "Bodyweight Squats", body: "legs", equipment: "none", duration: 40 },
    { name: "Lunges", body: "legs", equipment: "none", duration: 30 },
    { name: "Push-ups", body: "chest", equipment: "none", duration: 30 },
    { name: "Plank", body: "core", equipment: "none", duration: 30 },
    { name: "Bicep Curls", body: "arms", equipment: "dumbbells", duration: 30 },
    { name: "Tricep Dips", body: "arms", equipment: "none", duration: 30 },
    { name: "Bent-over Rows", body: "back", equipment: "dumbbells", duration: 35 },
    { name: "Kettlebell Swings", body: "full", equipment: "kettlebell", duration: 30 },
    { name: "Band Pull-aparts", body: "back", equipment: "bands", duration: 25 },
    { name: "Mountain Climbers", body: "full", equipment: "none", duration: 30 },
    { name: "Glute Bridge", body: "legs", equipment: "none", duration: 30 },
    { name: "Shoulder Press", body: "arms", equipment: "dumbbells", duration: 30 },
    { name: "Russian Twists", body: "core", equipment: "none", duration: 30 },
    { name: "Calf Raises", body: "legs", equipment: "none", duration: 30 }
  ];

  // State
  let queue = [];
  let currentIndex = -1;
  let currentTime = 0; // seconds remaining in current exercise
  let timerInterval = null;
  let isRunning = false;

  // DOM
  const startBtn = () => document.getElementById('startBtn');
  const stopBtn = () => document.getElementById('stopBtn');
  const nextBtn = () => document.getElementById('nextBtn');
  const exerciseNameEl = () => document.getElementById('exerciseName');
  const countdownEl = () => document.getElementById('countdown');
  const progressEl = () => document.getElementById('progress');

  // Utility: format seconds as MM:SS (or SS if < 60)
  function formatTime(sec) {
    if (sec < 0) sec = 0;
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return (m > 0 ? String(m).padStart(2,'0') + ':' : '') + String(s).padStart(2,'0');
  }

  // Build queue based on selected body part and equipment
  function buildQueue() {
    const body = document.getElementById('bodypart').value || 'full';
    const equipment = document.getElementById('equipment').value || 'none';

    // Filter: match body OR 'full'; match equipment OR equipment 'none' allowed when 'none' selected etc.
    const filtered = EXERCISES.filter(ex => {
      const bodyMatch = (body === 'full') ? true : (ex.body === body);
      // equipment selection: if selected 'none', include ex.equipment === 'none'.
      // If selected 'dumbbells', include exercises that require no equipment as well? Usually no. We'll include exercises requiring selected equipment OR none — let's include none so you can do mixed.
      const equipmentMatch = (equipment === 'none') ? (ex.equipment === 'none') : (ex.equipment === equipment || ex.equipment === 'none');
      return bodyMatch && equipmentMatch;
    });

    // If filtered list is empty, fallback to any exercises that match equipment or body
    if (filtered.length === 0) {
      return EXERCISES.filter(ex => ex.equipment === equipment || ex.body === body || ex.equipment === 'none').slice(0,8);
    }

    // Shuffle a little and return up to 8 exercises
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 8);
  }

  // Start the workout
  window.startWorkout = function() {
    if (isRunning) return;
    queue = buildQueue();
    if (!queue || queue.length === 0) {
      alert('No exercises found for your selection. Try different equipment/body part.');
      return;
    }
    currentIndex = 0;
    isRunning = true;
    startBtn().disabled = true;
    stopBtn().disabled = false;
    nextBtn().disabled = false;
    progressEl().textContent = `Exercise 1 of ${queue.length}`;
    startCurrentExercise();
  };

  // Start current exercise
  function startCurrentExercise() {
    if (!queue || queue.length === 0 || currentIndex < 0 || currentIndex >= queue.length) {
      finishWorkout();
      return;
    }
    const ex = queue[currentIndex];
    currentTime = ex.duration;
    exerciseNameEl().textContent = ex.name;
    updateCountdown();
    // Clear any existing interval
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    // Tick every 1000ms -> correct real-time pacing
    timerInterval = setInterval(() => {
      currentTime -= 1;
      updateCountdown();
      if (currentTime <= 0) {
        // move to next exercise automatically
        nextExercise();
      }
    }, 1000);
  }

  // Update the countdown display
  function updateCountdown() {
    countdownEl().textContent = formatTime(currentTime);
    progressEl().textContent = `Exercise ${Math.min(currentIndex + 1, queue.length)} of ${queue.length}`;
  }

  // Move to next exercise
  window.nextExercise = function() {
    // stop current interval
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    currentIndex++;
    if (currentIndex >= queue.length) {
      // done
      finishWorkout();
      return;
    }
    startCurrentExercise();
  };

  // Stop workout / pause
  window.stopWorkout = function() {
    if (!isRunning) return;
    // clear interval and set flags
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    isRunning = false;
    startBtn().disabled = false;
    stopBtn().disabled = true;
    nextBtn().disabled = true;
    progressEl().textContent = 'Workout paused';
    // show remaining time with paused label
    exerciseNameEl().textContent = queue[currentIndex] ? queue[currentIndex].name : 'Paused';
    // countdown remains as-is
  };

  // Finish workout
  function finishWorkout() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    isRunning = false;
    currentIndex = -1;
    queue = [];
    startBtn().disabled = false;
    stopBtn().disabled = true;
    nextBtn().disabled = true;
    exerciseNameEl().textContent = 'Workout Complete!';
    countdownEl().textContent = '00:00';
    progressEl().textContent = 'Great job — you finished the session!';
  }

  // Initialize UI on load
  document.addEventListener('DOMContentLoaded', () => {
    // Set initial UI
    exerciseNameEl().textContent = 'Get Ready!';
    countdownEl().textContent = '00:00';
    progressEl().textContent = 'No workout running';
    startBtn().disabled = false;
    stopBtn().disabled = true;
    nextBtn().disabled = true;

    // (Optional) support pressing spacebar to Start/Stop
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (!isRunning) startWorkout(); else stopWorkout();
      }
    });
  });

})();
