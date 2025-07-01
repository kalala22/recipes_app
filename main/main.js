// const boxImage = document.getElementsByClassName("boxImage");
// const boxTitle = document.getElementsByClassName("boxTitle");
// const cards = document.getElementsByClassName("cards");
// const box_card = document.getElementsByClassName("box_card");
// const boxIngredient = document.getElementsByClassName("boxDescript");
// const modal = document.getElementById("myModal");
// const modalContent = modal.querySelector(".modal_element_content");
// const divModalContent = document.getElementsByClassName("modal-content");
// const btnModal = document.getElementById("openModal");
// const span = document.querySelector(".close");

const card = document.getElementsByClassName("card");
const carousel = document.getElementsByClassName("carousel");
const modalBox = document.getElementsByClassName("modal-box");

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

  for (let i = 0; i < data.recipes.length; i++) {
    const details = data.recipes[i];

    console.log(details);

    const carouselItem = document.createElement("div");
    carouselItem.classList = "carousel-item";

    carouselItem.innerHTML = `
        <div class="carousel-item">
            <div class="card bg-base-100 w-70 shadow-sm flex items-center">
              <div class="card-body text-center">
                <h2 class="card-title text-2xl">${details.name}</h2>
                <p class="text-base">
                  ${details.tags.join(", ")}
                </p>
              </div>
              <figure>
                <img 
                  src="${details.image}"
                  alt="${details.image}"
                />
              </figure>
              <div class="mt-5 mb-5">
                <button  class="btnShowModal bg-[#ffb300] text-white">See All Details</button>
              </div>
              
            </div>
          </div>
    `;

    const btnShowModal = carouselItem.querySelector(".btnShowModal");

    btnShowModal.addEventListener("click", () => {
      // Injecte les données dans le modal
      modalBox.innerHTML = `
      <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
          <h3 class="text-lg font-bold">Hello!</h3>
          <p class="py-4">Press ESC key or click the button below to close</p>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      `;
      modal.style.display = "block";
    });

    carousel[0].appendChild(carouselItem);
  }

  // // Ferme le modal quand on clique sur la croix
  // span.addEventListener("click", () => {
  //   modal.style.display = "none";
  // });

  // // Ferme le modal quand on clique en dehors du contenu
  // window.addEventListener("click", (event) => {
  //   if (event.target === modal) {
  //     modal.style.display = "none";
  //   }
  // });
}

getRecette();
recuperationData();
