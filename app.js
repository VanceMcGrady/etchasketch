const container = document.querySelector(".container");
const clearBtn = document.querySelector(".clear-btn");

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

function clear() {
  container.innerHTML = "";
  createGrid(16, 16);
}

clearBtn.addEventListener("click", clear);

createGrid(16, 16);
