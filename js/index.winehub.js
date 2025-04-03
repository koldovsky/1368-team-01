//Mariia Kochetkova

const categories = [
  {
    id: "1",
    title: "Red Wines",
    description: "Great selection of red wines for you.",
    imageClass: "winehub__red",
    tag: "red",
  },
  {
    id: "2",
    title: "White Wines",
    description: "Top white wines for any occasion.",
    imageClass: "winehub__white",
    tag: "white",
  },
];

function rendercategories(categories) {
  let categoriesHtml = "";
  for (const category of categories) {
    categoriesHtml += `
      <div class="winehub__wine ${category.imageClass}">
        <div class="winehub__details">
          <p class="winehub__title">${category.title}</p>
          <svg class="winehub__divider--short">
            <use href="img/global/short-divider.svg#short-divider"></use>
          </svg>
          <p class="winehub__description">
          ${category.description}
          </p>
          <div class="winehub__button--container">
            <a href="#shop" class="winehub__button">Shop ${category.tag} wines</a>
          </div>
        </div>
      </div>`;
  }
  const categoriesList = document.querySelector(".winehub__selection");
  categoriesList.innerHTML = categoriesHtml;
}

rendercategories(categories);
