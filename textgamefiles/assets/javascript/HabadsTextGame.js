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

//rooms and description of rooms aka the game map
const rooms = {
  frontGate: {
    title: "The Eerie Estate - Front Gate",
    description:
      "You are standing before a dingy, degraded, battered old wooden door. Heavy rain pours down. Type <strong>ENTER</strong> or <strong>IN</strong> to open the door.",
    exits: {
      in: "foyer",
      enter: "foyer",
    },
  },
  foyer: {
    title: "The Eerie Estate - Foyer",
    description:
      "The air inside is thick with dust. A grand, broken chandelier hangs precariously above. To the north is a dark hallway. To the south is the exit back to safety.",
    exits: {
      north: "hallway",
      south: "frontGate",
      out: "frontGate",
      exit: "frontGate",
    },
  },
  hallway: {
    title: "The Dark Hallway",
    description:
      "A narrow corridor. Cobwebs brush against your face. You see an old newspaper on a small table here.",
    exits: {
      south: "foyer",
    },
  },
};

//this will track where the player is currently
let currentLocation = null;
//place holder for now

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
