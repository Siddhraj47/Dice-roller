// Dice Roll Simulator

// Element for Output
let outputEl = document.getElementById("output");

// Menu Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Menus Selection
  let selection = document.getElementById("menu").value;

  // Process Selection
  if (selection === "roll-once") {
    rollOnce();
  } else if (selection === "roll-five") {
    roll5Times();
  } else if (selection === "roll-n") {
    prompt1 = prompt("Enter # of Rolls");
    rollNTimes();
  } else if (selection === "snake-eyes") {
    snakeEyes();
  }
}

function rollOnce() {
  // Menus Title
  outputEl.innerHTML = "<h3>ROLL ONCE</h3>";

  // Random Dice Roll & Total
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  let total = die1 + die2;

  // Results to Output Elements
  let pEl = document.createElement("p");
  pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
  outputEl.appendChild(pEl);
}

function roll5Times() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 5 TIMES</h3>";
  let total = 0;
  let die1;
  let die2;
  for (let i = 0; i < 5; i++) {
    // Dice & Roll Totals
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;

    // Results to Output Elements
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
  }
}
