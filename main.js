const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// No butonu rastgele hareket ettirme
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
  const newY = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Yes butonu tıklandığında animasyonu başlat
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
    gifResult.play();
  }, 3000);
});
