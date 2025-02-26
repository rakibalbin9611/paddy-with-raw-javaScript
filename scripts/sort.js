// Function to sort pets by price (Descending Order)
const sortByPrice = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/peddy/pets"
    );
    const data = await res.json();
    // console.log(data.pets);

    const sortedPets = data.pets.sort((a, b) => b.price - a.price);

    // show to UI through displayAllPets
    displayAllPets(sortedPets);
  } catch (error) {
    console.error("Error fetching or sorting pets:", error);
  }
};

document
  .getElementById("sort-price-btn")
  .addEventListener("click", sortByPrice);
