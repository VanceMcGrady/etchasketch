function createGrid() {
  const mainContainer = document.querySelector(".main-container");

  for (let i = 0; i < 16; i++) {
    const unit = document.createElement("div");
    unit.classList.add("unit");
    mainContainer.appendChild(unit);
  }
}

createGrid();
