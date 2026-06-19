const locationBar = document.querySelector(".location");
const statsBar = document.querySelector(".stats");
const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");
const nameprompt = document.getElementById("nameprompt");

let playerName = "";

inputEl.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    let inputText = inputEl.value.trim();

    if (playerName === "") {
      if (inputText === "") return;

      playerName = inputText;
      inputEl.value = "";

      outputEl.innerHTML += `<div>"Ah, so your name is <strong>${playerName}</strong>," a cold breeze seems to whisper through the cracks of the battered door. </div><br />`;
      outputEl.innerHTML += `<div>"Welcome to the Eerie Estate ${playerName}...do not overstay your welcome here......." </div><br />`;

      // NOW WE SWAP IT! Only after they press enter does it become a permanent prompt.
      nameprompt.innerHTML = "$> ";
    }
  }
});

//status bar = location and updates of the location
locationBar.innerHTML = `The Eerie Estate - Front Gate`;
statsBar.innerHTML = `Score: 0 / Moves: 0`; // Pushes perfectly to the right!

// Initial output for the text
outputEl.innerHTML += `<div>Habad's Interactive Fiction,Copyright (c) 2025,
Habadcorp, Inc. All rights reserved.
Habad's Interactive fiction is a registered trademark of
HabadCorp, Inc.</div>`;
outputEl.innerHTML += `<br />`;
outputEl.innerHTML += `<pre class="welcome-art">${`
  ▗▄▄▄▖▐▌   ▗▞▀▚▖    ▗▄▄▄▖▗▞▀▚▖ ▄▄▄ ▄ ▗▞▀▚▖    ▗▄▄▄▖ ▄▄▄  ■  ▗▞▀▜▌   ■  ▗▞▀▚▖
    █  ▐▌   ▐▛▀▀▘    ▐▌   ▐▛▀▀▘█    ▄ ▐▛▀▀▘    ▐▌   ▀▄▄▗▄▟▙▄▖▝▚▄▟▌▗▄▟▙▄▖▐▛▀▀▘
    █  ▐▛▀▚▖▝▚▄▄▖    ▐▛▀▀▘▝▚▄▄▖█    █ ▝▚▄▄▖    ▐▛▀▀▘▄▄▄▀ ▐▌         ▐▌  ▝▚▄▄▖
    █  ▐▌ ▐▌         ▐▙▄▄▖          █          ▐▙▄▄▖     ▐▌         ▐▌       
                                                         ▐▌         ▐▌       
                                                                           
                                                                           
`}</pre>`;
outputEl.innerHTML += `<br />`;
outputEl.innerHTML += `<div>You have somehow found this dingy degraded battered old wooden door, it's your chance to escape the enemies relentless soldiers who've been tracking you. However, this building may have more to it than you thought adventurer!.....Do you dare enter?</div>`;
outputEl.innerHTML += `<br />`;
//nameprompt.innerHTML = `$>`;
