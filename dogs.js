// Selecting elements from the DOM
const getDetails = document.getElementById("getDetails");
const dogImageContainer = document.querySelector(".dogImageContainer");

// Event listener for the button click
getDetails.addEventListener("click", async () => {
  try {
    // Fetching random dog image from the API
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    // Updating the dog image container with the fetched image
    updateDogImage(data.message);
  } catch (error) {
    console.error("Error fetching dog image:", error);
  }
});

// Function to update the dog image in the container
function updateDogImage(imageUrl) {
  const dogImage = document.createElement("img");
  dogImage.src = imageUrl;
  dogImage.alt = "Random Dog Image";
  dogImage.classList.add("img-fluid", "rounded", "shadow");

  // Clear existing images
  while (dogImageContainer.firstChild) {
    dogImageContainer.removeChild(dogImageContainer.firstChild);
  }

  // Append the new image to the container
  dogImageContainer.appendChild(dogImage);
}
