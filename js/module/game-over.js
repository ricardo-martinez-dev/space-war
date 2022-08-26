import * as finalMsg from "./final-message.js";

// check if game is over
function gameOver(playerSpecs, player) {
  playerSpecs.life = "dead";
  document.querySelector("#life").innerHTML = playerSpecs.life;

  let wrapper = document.querySelector("#wrapper");

  // display final message when game is over
  finalMsg.finalMessage(playerSpecs);

  player.remove();
  wrapper.classList.add("dye-animation");
}

export { gameOver };
