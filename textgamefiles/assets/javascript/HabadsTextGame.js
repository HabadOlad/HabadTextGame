const statusBar = document.querySelector(".location");
const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");
const nameprompt = document.getElementById("nameprompt");

//status bar = location and updates of the location
statusBar.innerHTML += `location placeholder for now`;

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
nameprompt.innerHTML += `What is your name?....`;
