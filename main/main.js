async function getRecette() {
  const apiKey = "5daa2e86e5614ac3aee017fec59d1af2"; // remplace par ta vraie clé
  const dataRequest = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

  try {
    const dataResponse = await fetch(dataRequest);
    const response = await dataResponse.json();
    console.log(response);
  } catch (error) {
    console.error("Erreur lors de la récupération des recettes :", error);
  }
}

getRecette();
