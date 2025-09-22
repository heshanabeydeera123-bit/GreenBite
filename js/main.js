// 18 Recipes Data
const recipes = {
  "avocado-berry": `
    <h2>Avocado & Berry Bowl</h2>
    <p>A refreshing antioxidant-rich breakfast.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>1/2 avocado</li>
      <li>1/2 cup mixed berries</li>
      <li>1/2 cup yogurt</li>
      <li>1 tbsp chia seeds</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Slice avocado and place in a bowl.</li>
      <li>Add berries, yogurt, and chia seeds.</li>
      <li>Serve immediately.</li>
    </ol>
  `,

  "overnight-oats": `
    <h2>Overnight Oats</h2>
    <p>Easy no-cook make-ahead breakfast.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>1/2 cup rolled oats</li>
      <li>1/2 cup milk or almond milk</li>
      <li>1 tsp honey</li>
      <li>1/4 cup fruit topping</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Mix oats, milk, and honey in a jar.</li>
      <li>Refrigerate overnight.</li>
      <li>Top with fruit before serving.</li>
    </ol>
  `,

  "green-smoothie": `
    <h2>Green Smoothie</h2>
    <p>Loaded with vitamins and minerals.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>1 cup spinach</li>
      <li>1/2 banana</li>
      <li>1/2 cup pineapple</li>
      <li>1/2 cup water</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Blend all ingredients until smooth.</li>
      <li>Serve cold.</li>
    </ol>
  `,

  "chicken-salad": `
    <h2>Grilled Chicken Salad</h2>
    <p>Protein-packed with fresh veggies.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>1 grilled chicken breast</li>
      <li>2 cups mixed greens</li>
      <li>1/2 cucumber</li>
      <li>1 tbsp olive oil</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Slice chicken into strips.</li>
      <li>Toss with greens, cucumber, and olive oil.</li>
      <li>Serve fresh.</li>
    </ol>
  `,

  "quinoa-salad": `
    <h2>Quinoa Salad</h2>
    <p>Light and protein-packed.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>1 cup cooked quinoa</li>
      <li>1/2 cup cherry tomatoes</li>
      <li>1/2 cucumber</li>
      <li>1 tbsp lemon juice</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Mix quinoa, tomatoes, and cucumber.</li>
      <li>Drizzle with lemon juice.</li>
      <li>Chill before serving.</li>
    </ol>
  `,

  "veggie-wrap": `
    <h2>Veggie Wrap</h2>
    <p>Quick, healthy, and colorful.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>1 tortilla</li>
      <li>1/2 cup hummus</li>
      <li>1/2 cup mixed veggies (carrot, cucumber, lettuce)</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Spread hummus on tortilla.</li>
      <li>Add veggies and roll tightly.</li>
      <li>Cut and serve.</li>
    </ol>
  `,

  "salmon": `
    <h2>Lemon Herb Salmon</h2>
    <p>Rich in omega-3, elegant dinner.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>2 salmon fillets</li>
      <li>1 tbsp lemon juice</li>
      <li>1 tsp dried herbs</li>
      <li>1 tbsp olive oil</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Place salmon on baking tray.</li>
      <li>Season with lemon, herbs, and olive oil.</li>
      <li>Bake at 200°C for 15–20 mins.</li>
    </ol>
  `,

  "chickpea-curry": `
    <h2>Chickpea Curry</h2>
    <p>A plant-based protein curry.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>1 can chickpeas</li>
      <li>1/2 onion</li>
      <li>1 cup coconut milk</li>
      <li>2 tbsp curry paste</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Sauté onion until soft.</li>
      <li>Add curry paste and chickpeas.</li>
      <li>Pour coconut milk and simmer 10 mins.</li>
    </ol>
  `,

  "stuffed-peppers": `
    <h2>Stuffed Bell Peppers</h2>
    <p>Colorful peppers filled with rice & beans.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>2 bell peppers</li>
      <li>1/2 cup rice</li>
      <li>1/2 cup black beans</li>
      <li>1/4 cup cheese (optional)</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Cook rice and mix with beans.</li>
      <li>Stuff into peppers.</li>
      <li>Bake at 180°C for 15 mins.</li>
    </ol>
  `,

  "fruit-salad": `
    <h2>Fruit Salad</h2>
    <p>Refreshing seasonal fruits.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>1 cup mixed fruits (apple, banana, orange, kiwi)</li>
      <li>1 tsp honey</li>
      <li>1/2 tsp lemon juice</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Chop fruits into small pieces.</li>
      <li>Drizzle honey and lemon juice.</li>
      <li>Mix and chill before serving.</li>
    </ol>
  `,

  "yogurt-parfait": `
    <h2>Yogurt Parfait</h2>
    <p>Layers of yogurt, fruit, and granola.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>1 cup yogurt</li>
      <li>1/2 cup granola</li>
      <li>1/2 cup fresh berries</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Layer yogurt, granola, and berries in a glass.</li>
      <li>Repeat until full.</li>
      <li>Serve chilled.</li>
    </ol>
  `,

  "energy-balls": `
    <h2>Energy Balls</h2>
    <p>No-bake bite-sized snacks.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>1 cup oats</li>
      <li>1/2 cup peanut butter</li>
      <li>1/4 cup honey</li>
      <li>1/4 cup chocolate chips</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Mix all ingredients in a bowl.</li>
      <li>Roll into small balls.</li>
      <li>Refrigerate for 30 mins before serving.</li>
    </ol>
  `,

  "lentil-soup": `
    <h2>Lentil Soup</h2>
    <p>Hearty and comforting.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>1 cup red lentils</li>
      <li>1/2 onion</li>
      <li>1 carrot</li>
      <li>4 cups vegetable broth</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Sauté onion and carrot until soft.</li>
      <li>Add lentils and broth.</li>
      <li>Simmer 20 mins until lentils are tender.</li>
    </ol>
  `,

  "chicken-soup": `
    <h2>Chicken Soup</h2>
    <p>Classic comfort food.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>1 chicken breast</li>
      <li>1 carrot</li>
      <li>1 celery stick</li>
      <li>4 cups chicken broth</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Boil chicken until cooked, shred.</li>
      <li>Add carrot, celery, and broth.</li>
      <li>Simmer 15 mins and serve.</li>
    </ol>
  `,

  "black-bean-soup": `
    <h2>Black Bean Soup</h2>
    <p>Filling and protein-rich.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>1 can black beans</li>
      <li>1/2 onion</li>
      <li>2 garlic cloves</li>
      <li>3 cups vegetable broth</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Sauté onion and garlic.</li>
      <li>Add beans and broth.</li>
      <li>Simmer 20 mins, blend half for creamy texture.</li>
    </ol>
  `,

  "veggie-stirfry": `
    <h2>Veggie Stir-Fry</h2>
    <p>Quick colorful stir-fried veggies.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>2 cups mixed vegetables</li>
      <li>1 tbsp soy sauce</li>
      <li>1 tsp sesame oil</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Heat oil in a pan.</li>
      <li>Add veggies and stir-fry 5–7 mins.</li>
      <li>Finish with soy sauce.</li>
    </ol>
  `,

  "baked-sweet-potato": `
    <h2>Baked Sweet Potato</h2>
    <p>Nutrient-rich and simple.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>1 sweet potato</li>
      <li>1 tsp olive oil</li>
      <li>Salt & pepper</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Rub sweet potato with oil, salt, and pepper.</li>
      <li>Bake at 200°C for 40 mins until soft.</li>
    </ol>
  `,

  "zucchini-noodles": `
    <h2>Zucchini Noodles</h2>
    <p>A low-carb pasta alternative.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>2 zucchinis (spiralized)</li>
      <li>1 tbsp olive oil</li>
      <li>1/2 cup marinara sauce</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Heat oil in a pan.</li>
      <li>Add zucchini noodles and sauté 2–3 mins.</li>
      <li>Top with marinara sauce and serve.</li>
    </ol>
  `
};

// Modal Functions
function openRecipe(key) {
  document.getElementById("recipeDetails").innerHTML = recipes[key];
  document.getElementById("recipeModal").style.display = "flex";
}
function closeRecipe() {
  document.getElementById("recipeModal").style.display = "none";
}


function calculateCalories() {
  const age = parseInt(document.getElementById("age").value);
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const activity = parseFloat(document.getElementById("activity").value);

  if (isNaN(age) || isNaN(height) || isNaN(weight) || isNaN(activity)) {
    alert("Please fill all fields.");
    return;
  }

  // BMR (Mifflin-St Jeor formula for men, simplified)
  const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  const calories = Math.round(bmr * activity);

  // Macros: 30% protein, 40% carbs, 30% fat
  const protein = Math.round((calories * 0.30) / 4); // 4 kcal per g
  const carbs   = Math.round((calories * 0.40) / 4); // 4 kcal per g
  const fat     = Math.round((calories * 0.30) / 9); // 9 kcal per g

  document.getElementById("caloriesResult").textContent = calories + " kcal";
  document.getElementById("proteinResult").textContent = protein + " g";
  document.getElementById("carbsResult").textContent   = carbs + " g";
  document.getElementById("fatResult").textContent     = fat + " g";

  document.getElementById("results").style.display = "block";
}

function resetCalculator() {
  document.getElementById("age").value = "";
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("activity").value = "";
  document.getElementById("results").style.display = "none";
}
