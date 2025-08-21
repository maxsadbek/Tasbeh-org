
let decrementBtn = document.querySelector("#decrementBtn");
let incrementBtn = document.querySelector("#incrementBtn");
let p = document.querySelector("#p");
let SaveBtn = document.querySelector("#saveStep")
let SaveEntiresDiv = document.querySelector("#SaveEntires")
let resetBtn = document.querySelector("#reset")
let count = 0;
let arr = []
function decrementStep() {
    count--;
    p.textContent = count;
}

function incrementStep() {
    count++;
    p.textContent = count;
}
  
function resetFnc(){
    count = 0
    p.textContent =count
}

resetBtn.addEventListener("click", resetFnc)
SaveBtn.addEventListener("click", saveStep)
incrementBtn.addEventListener("click", incrementStep);
decrementBtn.addEventListener("click", decrementStep);
