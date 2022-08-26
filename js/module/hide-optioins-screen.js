import * as init from "../module/player.js";

let playerSpecs = {
  life: 1,
  health: 10,
  score: 0,
  enemies: 0,
  speed: 10,
  power: 0,
  overpower: 1,
  weapons: {
    light: "infinite",
    medium: 1,
    heavy: 1,
  },
  position: {
    top: 460,
    left: 240,
  },
  time: 0,
};

function hideOptionsScreen(options) {
  let startBtn = document.querySelector("#start-btn");

  startBtn.addEventListener("click", () => {
    let optionsScreen = document.querySelector("#options-screen");

    optionsScreen.style.display = "none";

    console.log("playing...");

    let wrapper = document.querySelector("#wrapper");
    let instructions = document.querySelector("#instructions");
    let status = document.querySelector("#status");

    wrapper.style.display = "block";
    instructions.style.display = "flex";
    status.style.display = "flex";

    options.playing = true;

    console.log(options);

    init.init(playerSpecs);
  });
}

export { hideOptionsScreen };
