
let decrementBtn = document.querySelector("#decrementBtn");
let incrementBtn = document.querySelector("#incrementBtn");
let p = document.querySelector("#p");
let resetBtn = document.querySelector("#reset")
let selectBtn = document.querySelector("#select")
let count = 0;

function decrementStep() {
  count--;
  p.textContent = count;
}


function incrementStep() {
  count++;
  p.textContent = count;
}

function resetFnc() {
  let alrt = alert("Confirm Reset:\nYou're about to reset the counter to 0")
  count = 0
  p.textContent = count
}


resetBtn.addEventListener("click", resetFnc)
incrementBtn.addEventListener("click", incrementStep);
decrementBtn.addEventListener("click", decrementStep);
