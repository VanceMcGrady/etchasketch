const container = document.querySelector(".container");
const clearBtn = document.querySelector(".clear-btn");
const slider = document.querySelector(".slider");
const colorBtn = document.querySelector(".color-btn");
let colorIsClicked = false;
let rows = 16;
let cols = 16;

console.log(colorBtn.innerText);

function createGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseenter", function (e) {
      colorIsClicked
        ? (e.target.style.backgroundColor = getRandomColor())
        : (e.target.style.backgroundColor = "black");
    });
    container.appendChild(cell).className = "grid-item";
  }
}

function clear() {
  container.innerHTML = "";
  createGrid(slider.value, slider.value);
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

colorBtn.addEventListener("click", function () {
  if (colorIsClicked === false) {
    colorIsClicked = true;
    colorBtn.innerText = "RANDOM COLOR";
  } else if (colorIsClicked === true) {
    colorIsClicked = false;
    colorBtn.innerText = "BLACK";
  }
  console.log(colorIsClicked);
});

slider.addEventListener("mouseup", clear);

clearBtn.addEventListener("click", clear);

createGrid(rows, cols);
