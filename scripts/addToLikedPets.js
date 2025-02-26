const addToLikedPets = (pet) => {
  console.log(pet);

  const likedPetsContainer = document.getElementById("liked-pets");

  const petThumbnail = document.createElement("div");
  petThumbnail.classList =
    "rounded-lg border p-2 shadow-md bg-white flex flex-col items-center w-24";

  petThumbnail.innerHTML = `<img src="${pet.image}" alt="${pet.pet_name}" class="h-24 w-24 object-cover rounded-md mx-auto">
    <p class="text-center text-sm font-bold mt-2">${pet.pet_name}</p>
  `;

  likedPetsContainer.append(petThumbnail);
};
