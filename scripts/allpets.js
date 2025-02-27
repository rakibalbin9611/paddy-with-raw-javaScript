// load all pets
const loadAllPets = async () => {
  const url = "https://openapi.programming-hero.com/api/peddy/pets";
  const res = await fetch(url);
  const data = await res.json();
  displayAllPets(data.pets);
};

// Load categories
const loadCategories = async () => {
  const url = "https://openapi.programming-hero.com/api/peddy/categories";
  const res = await fetch(url);
  const data = await res.json();
  displyCategories(data.categories);
};

// Load category-wise pets
const loadCategoryPets = async (categoryName) => {
  // console.log(categoryName);
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/peddy/category/${categoryName}`
    );
    const data = await res.json();
    if (data.data.length > 0) {
      displayAllPets(data.data);
    } else {
      displayErrorMessage();
    }
  } catch (error) {
    console.error("Error loading category pets:", error);
  }
};

// Display categories
const displyCategories = (categories) => {
  // console.log(categories);
  const categoryContainer = document.getElementById("categories");
  categoryContainer.innerHTML = "";
  categoryContainer.className =
    "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5";

  categories.forEach((item) => {
    // console.log(item);
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "w-full flex justify-center";

    buttonContainer.innerHTML = `
    <button onclick="loadCategoryPets('${item.category}')" class="flex items-center justify-center gap-3 bg-[#EAF4F4] text-black font-bold text-lg px-6 py-4 
    rounded-full shadow-md transition-all duration-300 ease-in-out hover:scale-105 w-72 border-2 border-transparent hover:border-teal-600 focus:border-teal-600 focus:bg-white">
     <img src="${item.category_icon}" class="h-6 w-6" alt="${item.category} icon"/>
         ${item.category}   
    </button>
    `;
    categoryContainer.append(buttonContainer);
  });
};
// Display all pets
const displayAllPets = (allPet) => {
  // console.log(allPet);
  const petContainer = document.getElementById("all-pet");
  petContainer.innerHTML = "";
  allPet.forEach((pet) => {
    // console.log(pet);

    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `<div class="w-80">
  <figure>
    <img class = "h-full w-full object-cover rounded-xl"
      src=${pet.image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="text-xl font-bold">${pet.pet_name}</h2>
    <div class ="space-y-2">
        <div class ="flex items-center gap-2">
            <img class = "h-5 w-5 text-[#5A5A5A]" src = "https://img.icons8.com/?size=100&id=DjpPnyGTytGv&format=png&color=000000" />
            <p class ="text-xl font-regular text-[#131313B3]">Breed: ${pet.breed} </p>
        </div>
        <div class ="flex items-center gap-2">
            <img class = "h-5 w-5 text-[#5A5A5A]" src = "https://img.icons8.com/?size=100&id=C9qkl0ucylkq&format=png&color=000000" />
            <p class ="text-xl font-regular text-[#131313B3]">Birth: ${pet.date_of_birth} </p>
        </div>
        <div class ="flex items-center gap-2">
            <img class = "h-5 w-5 text-[#5A5A5A]" src = "https://img.icons8.com/?size=100&id=skdvszUmNlnQ&format=png&color=000000" />
            <p class ="text-xl font-regular text-[#131313B3]">Gender: ${pet.gender} </p>
        </div>
        <div class ="flex items-center gap-2">
            <img class = "h-5 w-5 text-[#5A5A5A]" src = "https://img.icons8.com/?size=100&id=7172&format=png&color=000000" />
            <p class ="text-xl font-regular text-[#131313B3]">Price: ${pet.price}$ </p>
        </div>
    </div>
    </div>
    <div class ="flex items-center">
        <button  class ="btn like-button"> <img  class ="h-5 w-5 text-[#5A5A5A]" src="https://img.icons8.com/?size=100&id=24816&format=png&color=000000"> </button>
        <button  class ="btn text-[#0E7A81]"> Adopt </button>
        <button class = "btn text-[#0E7A81]"> Details </button>
    </div>
  </div>
</div>
    `;

    // **Find the Like button inside the card**
    const likeButton = card.querySelector(".like-button");

    // **Attach event listener**
    likeButton.addEventListener("click", () => addToLikedPets(pet));

    petContainer.append(card);
  });
};

// Display error message
const displayErrorMessage = () => {
  const petContainer = document.getElementById("all-pet");
  petContainer.innerHTML = `<div class="text-center col-span-full ">
    <img class="mx-auto mb-4 w-64 h-64" src="./images/error.webp"/>
    <h2 class="text-3xl font-bold text-red-500">Oops! Sorry, there is no data here.</h2>
  </div>`;
};

loadAllPets();
loadCategories();
