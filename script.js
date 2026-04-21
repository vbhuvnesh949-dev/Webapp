// 📊 Formula
function showFormula(type) {
  let box = document.getElementById("formulaBox");

  if (type === "physics") {
    box.innerHTML = "v = u + at <br> F = ma";
  } else if (type === "chemistry") {
    box.innerHTML = "PV = nRT <br> pH = -log[H+]";
  }
}

// 🧠 Quiz
function checkAnswer(ans) {
  let result = document.getElementById("quizResult");
  if (ans === 4) {
    result.innerText = "Correct ✅";
  } else {
    result.innerText = "Wrong ❌";
  }
}

// 📅 Planner
function addTask() {
  let task = document.getElementById("task").value;
  let list = document.getElementById("taskList");

  let li = document.createElement("li");
  li.innerText = task;
  list.appendChild(li);
}

// 🤖 Fake AI
function aiReply() {
  let input = document.getElementById("aiInput").value;
  document.getElementById("aiOutput").innerText = 
    "AI: Ye concept practice karo 👍";
}
