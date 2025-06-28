const boxImage = document.getElementsByClassName("boxImage");
const boxTitle = document.getElementsByClassName("boxTitle");
const cards = document.getElementsByClassName("cards");
const box_card = document.getElementsByClassName("box_card");
const boxIngredient = document.getElementsByClassName("boxDescript");
const modal = document.getElementById("myModal");
const divModalContent = document.getElementsByClassName("modal-content");
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

  console.log(data.recipes);

  for (let i = 0; i < data.recipes.length; i++) {
    const details = data.recipes[i];

    const card = document.createElement("div");
    const modalContentElement = document.createElement("div");

    modalContentElement.className = "modal_element_content";
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
    modalContentElement.innerHTML = `
     <img src="${details.image}">
    `;
    const btn = card.querySelector(".btn_detail");

    cards[0].appendChild(card);
    divModalContent[0].appendChild(modalContentElement);

    btn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    span.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
}

getRecette();
recuperationData();
