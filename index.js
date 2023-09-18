const btn = document.getElementById("btn");
const carContainer = document.querySelector(".car-container");
const carImg = document.querySelector(".car-img");
const carName = document.querySelector(".car-name");

btn.addEventListener("click", async function () {
  try {
    carImg.src = "spinner.svg";
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=9dU-ClQ1rjYh6JC2OdcVzOo_1Ynf440VKrDtkJYTw_M&query=cargit");
    const data = await response.json();
    btn.innerText = "Get Cars";
    carContainer.style.display = "block";
    carImg.src = data.links.download;
    carName.innerText = data.alt_description;
  } catch (error) {
    console.log(error);
    btn.disabled = false;
    btn.innerText = "Get car";
    carName.innerText = "An error happened, please try again";
  }
});