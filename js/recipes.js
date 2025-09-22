const recipes = {
  "avocado-berry": `
    <h2>Avocado & Berry Breakfast Bowl</h2>
    <p>A powerful and antioxidant-rich start to your day, ready in 5 minutes.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>1 ripe banana</li>
      <li>1/2 cup frozen mixed berries</li>
      <li>1/4 cup rolled oats</li>
      <li>1/2 cup almond milk</li>
      <li>1/2 avocado, sliced</li>
      <li>1 tbsp chia seeds</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Blend banana, berries, oats, and almond milk until smooth.</li>
      <li>Pour into a bowl and top with avocado and chia seeds.</li>
    </ol>
  `,
  "quinoa-salad": `
    <h2>Quinoa Salad with Lemon–Herb Dressing</h2>
    <p>A light, protein-packed salad perfect for lunch.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>1 cup cooked quinoa</li>
      <li>1/2 cup cucumber, chopped</li>
      <li>1/2 cup cherry tomatoes</li>
      <li>1 tbsp olive oil</li>
      <li>1 tbsp lemon juice</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Mix quinoa with cucumber and tomatoes.</li>
      <li>Whisk olive oil and lemon juice, pour over salad.</li>
    </ol>
  `,
  "salmon": `
    <h2>One-Pan Lemon Herb Salmon & Asparagus</h2>
    <p>An elegant yet simple dinner full of flavor and healthy omega-3s.</p>
    <h4>Ingredients</h4>
    <ul>
      <li>2 salmon fillets</li>
      <li>1 bunch asparagus</li>
      <li>2 tbsp olive oil</li>
      <li>1 tbsp lemon juice</li>
      <li>1 tsp dried herbs</li>
    </ul>
    <h4>Instructions</h4>
    <ol>
      <li>Place salmon and asparagus on baking sheet.</li>
      <li>Drizzle with olive oil, lemon juice, and herbs.</li>
      <li>Bake at 200°C for 15–20 minutes.</li>
    </ol>
  `
};

function openRecipe(key) {
  document.getElementById("recipeDetails").innerHTML = recipes[key];
  document.getElementById("recipeModal").style.display = "flex";
}
function closeRecipe() {
  document.getElementById("recipeModal").style.display = "none";
}
