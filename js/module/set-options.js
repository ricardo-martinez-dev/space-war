import * as diff from "./difficulty.js";

function setOptions() {
  let options = {
    difficulty: "normal",
    playerShip: "./img/player.png",
    playerName: "Player",
    playing: "false",
  };

  // choose game difficulty
  let opt = diff.chooseDifficulty(options);

  console.log(opt);

  return options;
}

export { setOptions };
