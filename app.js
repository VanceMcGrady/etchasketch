const container = document.querySelector(".container");

function createGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = "black";
    });
    container.appendChild(cell).className = "grid-item";
  }
}

createGrid(16, 16);
