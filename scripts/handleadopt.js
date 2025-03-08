const handleAdopt = (button) => {
  let countdown = 3;
  button.disabled = true; // Disable button during countdown

  const interval = setInterval(() => {
    if (countdown > 0) {
      button.textContent = `Adopting in ${countdown}...`;
      countdown--;
    } else {
      clearInterval(interval);
      button.textContent = "Adopted";
      button.classList.add("bg-gray-400", "text-white", "cursor-not-allowed"); // Styling for disabled
    }
  }, 1000);
};
