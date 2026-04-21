// Calculator
function calculate() {
  let val = document.getElementById("calc").value;
  document.getElementById("result").innerText = eval(val);
}

// Notes Save
function saveNotes() {
  let notes = document.getElementById("notes").value;
  localStorage.setItem("notes", notes);
  alert("Saved!");
}

// Load Notes
window.onload = function() {
  document.getElementById("notes").value = localStorage.getItem("notes") || "";
};

// Timer
let time = 0;
function startTimer() {
  setInterval(() => {
    time++;
    document.getElementById("time").innerText = time + " sec";
  }, 1000);
}
