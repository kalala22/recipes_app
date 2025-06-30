const boxImage = document.getElementsByClassName("boxImage");
const boxTitle = document.getElementsByClassName("boxTitle");
const cards = document.getElementsByClassName("cards");
const box_card = document.getElementsByClassName("box_card");
const boxIngredient = document.getElementsByClassName("boxDescript");
const modal = document.getElementById("myModal");
const modalContent = modal.querySelector(".modal_element_content");
//const divModalContent = document.getElementsByClassName("modal-content");
//const btnModal = document.getElementById("openModal");
const span = document.querySelector(".close");

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

  // const cardsContainer = document.querySelector(".cards"); // container des cartes
  // const modal = document.getElementById("modal"); // le modal principal
  // const modalContent = modal.querySelector(".modal_element_content"); // zone où on injecte le contenu
  // const closeBtn = document.getElementById("close"); // bouton pour fermer

  for (let i = 0; i < data.recipes.length; i++) {
    const details = data.recipes[i];

    console.log(details);

    const card = document.createElement("div");
    card.classList = "box_card";

    card.innerHTML = `
      <div class="boxImage">
        <img src="${details.image}">
      </div>
      <div class="boxTitle">${details.name}</div>
      <div class="boxDescript">${details.description || ""}</div>
      <div class="btn_detail">
        <span>See Full Details</span>
      </div>
    `;

    const btn = card.querySelector(".btn_detail");

    btn.addEventListener("click", () => {
      // Injecte les données dans le modal
      modalContent.innerHTML = `
        
        <div class="box_modalImage"> 
          <img src="${details.image}" alt="${details.name}">
        </div>
        <div class = "box_Description_Recipes"> 
        <h2>${details.name}</h2>
        <div class="box_preparation">
          <p>Cook Time: ${details.cookTimeMinutes} Min</p>
          <p>Cuisine: ${details.cuisine}</p>
          <p>Diffuculty: ${details.difficulty}</p>
          <p>Ingredients: ${details.ingredients}</p>
          <p>Instructions: ${details.instructions}</p>
          <p>Rating: ${details.rating}</p>
        </div>
        </div>

      `;
      modal.style.display = "block";
    });

    cards[0].appendChild(card);
  }

  // Ferme le modal quand on clique sur la croix
  span.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Ferme le modal quand on clique en dehors du contenu
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

getRecette();
recuperationData();
