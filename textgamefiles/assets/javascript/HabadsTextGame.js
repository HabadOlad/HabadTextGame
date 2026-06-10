// const playerName = prompt("what is your name?:");

const statusBar = document.querySelector(".location");
const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");

// Initial description
outputEl.innerHTML += `<div class="prompt">$></div><div>Habad's Interactive Fiction,Copyright (c) 2025,
Habadcorp, Inc. All rights reserved.
Habad's Interactive fiction is a registered trademark of
HabadCorp, Inc.</div>`;
outputEl.innerHTML += `<div class="prompt">$></div><div>Welcome to Habad's Interactive Fiction, ${playerName}! The commands are: look up and look down, north/ south/ east/ west</div>`;
outputEl.innerHTML += `<div class="prompt">$></div><div>So hero: ${playerName}! Can you find the treasure before you get chopped up by the zombie butcher?</div>`;
outputEl.innerHTML += `quick tip...always look up first!`;

statusBar.innerHTML += `location placeholder for now`;

// inputEl.addEventListener("keydown", (event) => {

//   if(event.key == "Enter")

//   });
