import * as gameOver from "./game-over.js";
import * as loseOneLife from "./lose-one-life.js";
import * as updateHealth from "./update-health.js";

async function explode() {
  let explosion = new Audio("./audio/explosion.mp3");
  explosion.play();
}

function collide(obj) {
  // check collision: player bottom / enemy top
  const { player, enemy } = obj;
  if (
    // check collision: player bottom / enemy top
    player.offsetTop === enemy.offsetTop &&
    player.offsetLeft <= enemy.offsetLeft + 30 &&
    player.offsetLeft + 30 >= enemy.offsetLeft
  ) {
    return true;
  }
}

// delete enemy on crash
function destroyEnemy(enemy) {
  enemy.parentNode.removeChild(enemy);
}

function playerEnemyCollision(playerSpecs) {
  let player = document.querySelector("#player");

  // start checking enemy and player position
  const interval = setInterval(() => {
    let enemy = document.querySelectorAll(".enemy-player");

    for (let i = 0; i < enemy.length; i++) {
      // check if there's a collision between player and enemy
      const collision = collide({ player, enemy: enemy[i] });

      if (collision) {
        destroyEnemy(enemy[i]);
        explode();

        // update player health
        updateHealth.updatePlayerHealth(playerSpecs);

        if (playerSpecs.health === 0) {
          // lose one life
          loseOneLife.loseOneLife(playerSpecs, player);

          if (playerSpecs.life < 0) {
            clearInterval(interval);
            // check if game is over
            gameOver.gameOver(playerSpecs, player);
          }
        }
      }
    }
  }, 0);
}

export { playerEnemyCollision };
