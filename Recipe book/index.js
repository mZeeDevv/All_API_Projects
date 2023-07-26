const API = 'b30abba49d9c4cd39e24d37798423099';
const recipeList = document.getElementById("recipe-list")


function displayRecipe(recipe)
{
    recipeList.innerHTML = " ";
    recipe.forEach((recipe) => {
        const recipeLists = document.createElement("li");
        recipeLists.classList.add("recipe-item");
        const recpImg = document.createElement("img");
        recpImg.src = recipe.image;
        recpImg.alt = "recipe image";
        recpName = document.createElement("h2");
        recpName.innerHTML = recipe.title;
        recipeLists.appendChild(recpImg);
        recipeLists.appendChild(recpName);
        ingredientList = document.createElement("p");
        ingredientList.innerHTML = `<strong>Ingridients:</strong> ${ recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}`;
        recipeLink = document.createElement("a");
        recipeLink.href = recipe.sourceUrl;
        recipeLink.innerHTML = "View recipe";
        recipeLists.appendChild(ingredientList);
        recipeLists.appendChild(recipeLink);
        recipeList.appendChild(recipeLists);
})
}
async function getRecipe()
{
 const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API}`);
 const data = await response.json()
 return data.recipes;
 
}
async function init()
{
   const recipe = await getRecipe();
   displayRecipe(recipe);
}
init();