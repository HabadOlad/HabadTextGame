const statusBar = document.querySelector(".location");
const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");
const nameprompt = document.getElementById("nameprompt");

//status bar = location and updates of the location
statusBar.innerHTML += `location placeholder for now`;

// Initial output for the text
outputEl.innerHTML += `<div class="prompt">$></div><div>Habad's Interactive Fiction,Copyright (c) 2025,
Habadcorp, Inc. All rights reserved.
Habad's Interactive fiction is a registered trademark of
HabadCorp, Inc.</div>`;
outputEl.innerHTML += `<br />`;
outputEl.innerHTML += `<div class="prompt">$></div><div>Welcome to Habad's Interactive Fiction, adventurer !</div>`;
outputEl.innerHTML += `<br />`;
outputEl.innerHTML += `<div class="prompt">$></div><div>You have somehow found this dingy degraded battered old wooden door, it's your chance too escape the enemies relentelss soldiers who've been tracking you. However, this building may have more too it than you thought adventurer!.....Do you dare enter?</div>`;
outputEl.innerHTML += `<br />`;
