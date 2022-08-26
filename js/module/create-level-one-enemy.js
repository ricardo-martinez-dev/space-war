import * as loseHealth from "./lose-health-when-enemy-reaches-bottom.js";

function createEnemyLevelOne(playerSpecs) {
  // create a new enemy
  let enemy = document.createElement("div");

  // destroy the enemy when it reaches the bottom of the playing area
  setTimeout(() => {
    loseHealth.loseHealthIfEnemyReachesTheBottomOfPlayingArea(
      playerSpecs,
      enemy
    );
    enemy.remove();
  }, 10000);

  enemy.className = "enemy-player";

  let randomNumber = Math.floor(Math.random() * 4) + 1;
  // add icon to enemy
  // enemy.innerHTML = '<i class="fas fa-pastafarianism"></i>';
  enemy.innerHTML = `<div><img src="../img/enemy-${randomNumber}.png"></div>`;
  enemy.style.width = "30px";
  enemy.style.height = "30px";
  enemy.querySelector("img").style.width = "100%";
  enemy.querySelector("img").style.height = "30px";

  // set a random x position for the enemy
  let positionX = Math.floor(Math.random() * 480.5);
  enemy.style.left = positionX + "px";

  // add movement (downwards) to enemy
  enemy.classList.add("animate");

  // add enemy in the screen
  document.querySelector("#wrapper").appendChild(enemy);
}

export { createEnemyLevelOne };
