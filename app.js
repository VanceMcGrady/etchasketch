const padContainer = document.querySelector(".pad-container");
const clearBtn = document.querySelector(".clear-btn");
const slider = document.querySelector(".slider");

createGrid();

const unit = document.querySelector(".unit");

slider.addEventListener("input", function (e) {
  unit.style.width = `${slider.value}px`;
  unit.style.height = `${slider.value}px`;
});

function createGrid() {
  for (let i = 0; i < 10000; i++) {
    const newUnit = document.createElement("div");
    newUnit.classList.add("unit");
    padContainer.appendChild(newUnit);
    newUnit.addEventListener(
      "mouseenter",
      function (e) {
        e.target.classList.toggle("active");
      },
      { capture: false, once: true }
    );
  }
}

clearBtn.addEventListener("click", function clearPad() {
  padContainer.innerHTML = "";
  createGrid();
});
