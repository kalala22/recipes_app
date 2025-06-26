const boxImage = document.getElementsByClassName("boxImage");
const boxTitle = document.getElementsByClassName("boxTitle");
const cards = document.getElementsByClassName("cards");
const box_card = document.getElementsByClassName("box_card");
const boxIngredient = document.getElementsByClassName("boxDescript");

async function getRecette() {
  // const apiKey = "5daa2e86e5614ac3aee017fec59d1af2"; // remplace par ta vraie clé
  const dataRequest = `https://dummyjson.com/recipes`;

  try {
    const dataResponse = await fetch(dataRequest);
    const response = await dataResponse.json();

    return response;
  } catch (error) {
    console.error("Erreur lors de la récupération des recettes :", error);
    return null;
  }
}
async function recuperationData() {
  const data = await getRecette();

  console.log(data.recipes);

  for (let i = 0; i < data.recipes.length; i++) {
    const details = data.recipes[i];

    const card = document.createElement("div");
    card.classList = "box_card";

    card.innerHTML = `<div class="boxImage">
    <img src="${details.image}">
    </div>
        <div class="boxTitle">${details.name}</div>
        <div class="boxDescript">
        </div>
        <div class="btn_detail">
        <span>See Full Details</span>
    </div>`;
    const btn = card.querySelector(".btn_detail");

    btn.addEventListener("click", () => {
      console.log(`Détails de la recette : ${details.name}`);
    });

    cards[0].appendChild(card);
  }
  return data;
}

getRecette();
recuperationData();

// const image = document.createElement("img");
// const nameRecipe = document.createElement("p");
// const listIngredient = document.createElement("p");

// image.src = data.recipes[i].image;
// nameRecipe.textContent = data.recipes[i].name;
// listIngredient.textContent = data.recipes[i].ingredients;

// boxImage[i].appendChild(image);
// boxTitle[i].appendChild(nameRecipe);
// boxIngredient[i].appendChild(listIngredient);

//  <h2>Ingredients</h2>
//               <p>${details.ingredients}</p>
