const addToLikedPets = (pet) => {
  console.log(pet);

  const likedPetsContainer = document.getElementById("liked-pets");

  const petThumbnail = document.createElement("div");
  petThumbnail.classList =
    "rounded-lg border p-2 shadow-md bg-white flex flex-col items-center ";

  petThumbnail.innerHTML = `<img src="${pet.image}" alt="${pet.pet_name}" class="h-32 w-40 object-cover rounded-md mx-auto">
    
  `;

  likedPetsContainer.append(petThumbnail);
};

// load pet details through modal
const loadPetDetails = async (petId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pet/${petId}`
  );
  const data = await res.json();
  showPetDetails(data.petData);
};

// showPetDetails
const showPetDetails = (pet) => {
  const detailContainer = document.getElementById("modal-content");

  detailContainer.innerHTML = ` <img src='${pet.image}'/>
  <p class='p-3'> ${pet.pet_details} </p>
  `;

  document.getElementById("customModal").showModal();
};
