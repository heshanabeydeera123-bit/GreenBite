function calculateCalories() {
  const age = parseInt(document.getElementById("age").value);
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const activity = parseFloat(document.getElementById("activity").value);

  if (isNaN(age) || isNaN(height) || isNaN(weight) || isNaN(activity)) {
    alert("Please fill all fields correctly.");
    return;
  }

  // Mifflin-St Jeor Formula (male baseline)
  const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  const calories = Math.round(bmr * activity);

  // Macronutrients (30% protein, 40% carbs, 30% fat)
  const protein = Math.round((calories * 0.30) / 4);
  const carbs   = Math.round((calories * 0.40) / 4);
  const fat     = Math.round((calories * 0.30) / 9);

  // Show results
  document.getElementById("caloriesResult").textContent = calories + " kcal";
  document.getElementById("proteinResult").textContent = protein + " g";
  document.getElementById("carbsResult").textContent = carbs + " g";
  document.getElementById("fatResult").textContent = fat + " g";

  document.getElementById("results").style.display = "block";
}

function resetCalculator() {
  document.getElementById("age").value = "";
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("activity").value = "";
  document.getElementById("results").style.display = "none";
}
