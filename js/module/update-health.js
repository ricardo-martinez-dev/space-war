import * as loseOneLife from "./lose-one-life.js";

// update player health
function updatePlayerHealth(playerSpecs) {
  // update player health object
  playerSpecs.health -= 2;
  // update player health on status

  let health = document.querySelector("#health");

  health.style.width = playerSpecs.health * 10 + "%";

  if (health.style.width === 0) {
    loseOneLife.loseOneLife(playerSpecs, player);
  }
}

export { updatePlayerHealth };
