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
