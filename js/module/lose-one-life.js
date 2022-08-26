// lose one life when player and enemy crash
function loseOneLife(playerSpecs, player) {
  player.classList.remove("blink");

  // reset health bar
  if (playerSpecs.life > 0) playerSpecs.health = 10;

  document.querySelector("#health").style.width = playerSpecs.health * 10 + "%";

  // update player life object
  playerSpecs.life -= 1;
  // update player life on status
  document.querySelector("#life").innerHTML = playerSpecs.life;
}

export { loseOneLife };
