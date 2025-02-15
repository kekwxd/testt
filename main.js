const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container.yes");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// /change the postion of no button
// No butonu rastgele hareket ettirme
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newX = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
  const newY = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

  noBtn.style.position = "absolute";
noBtn.style.left = `${newX}px`;
noBtn.style.top = `${newY}px`;
});

// yes button functionality

// Yes butonu tıklandığında animasyonu başlat
yesBtn.addEventListener("click", () => {
questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";
  heartLoader.style.display = "block";

  const timeoutId = setTimeout(() => {
  setTimeout(() => {
heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    resultContainer.style.display = "block";
gifResult.play();
}, 3000);
});
