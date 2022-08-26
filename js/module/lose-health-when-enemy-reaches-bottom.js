import * as gameOver from "./game-over.js";

function loseHealthIfEnemyReachesTheBottomOfPlayingArea(playerSpecs, enemy) {
  if (enemy.getBoundingClientRect().top >= 595) {
    // enemy.color = "yellow";
    playerSpecs.health -= 2;

    let health = document.querySelector("#health");
    health.style.width = playerSpecs.health * 10 + "%";

    // lose one life if health bar === 0
    if (playerSpecs.health === 0) {
      playerSpecs.life -= 1;
      document.querySelector("#life").innerHTML = playerSpecs.life;

      playerSpecs.health = 10;
      health.style.width = playerSpecs.health * 10 + "%";
    }

    if (playerSpecs.life < 0) {
      gameOver.gameOver(playerSpecs, player);
    }
  }
}

export { loseHealthIfEnemyReachesTheBottomOfPlayingArea };
