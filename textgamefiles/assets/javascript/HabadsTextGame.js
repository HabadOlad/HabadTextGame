const statusBar = document.querySelector(".location");
const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");
const nameprompt = document.getElementById("nameprompt");

// Initial description

outputEl.innerHTML += `<div class="prompt">$></div><div>Habad's Interactive Fiction,Copyright (c) 2025,
Habadcorp, Inc. All rights reserved.
Habad's Interactive fiction is a registered trademark of
HabadCorp, Inc.</div>`;
outputEl.innerHTML += `<div class="prompt">$></div><div>Welcome to Habad's Interactive Fiction, adventuerer !</div>`;
outputEl.innerHTML += `<div class="prompt">$></div><div>You have somehow found this dingy degraded battered old wooden door, it's your chance too escape the enemies relentelss soldiers who've been tracking you. However, this building may have more too it than you thought adventurer!.....Do you dare enter?</div>`;

statusBar.innerHTML += `location placeholder for now`;
