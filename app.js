function createGrid() {
  const mainContainer = document.querySelector(".main-container");

  for (let i = 0; i < 30000; i++) {
    const newUnit = document.createElement("div");
    newUnit.classList.add("unit");
    mainContainer.appendChild(newUnit);
    newUnit.addEventListener(
      "mouseenter",
      function (e) {
        e.target.style.backgroundColor = "black";
      },
      { capture: false, once: true }
    );
  }
}

createGrid();

const unit = document.querySelector(".unit");
