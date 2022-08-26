import * as move from "./movements.js";
import * as op from "./overpower.js";
import * as status from "./status.js";
import * as shoot from "./shoot.js";
import * as enemy from "./enemy.js";
import * as collision from "./collision.js";
import * as star from "./star.js";
import * as time from "./timer.js";
import * as weapons from "./weapons.js";
import * as highlightWeaponsInfo from "./highlight-weapon-info.js";

function init(playerSpecs) {
  // highlight weapons and overpower info
  highlightWeaponsInfo.highlightWeaponNum(playerSpecs);

  // start player movements
  move.movePlayer(playerSpecs);

  // set player lives
  status.setPlayerLives(playerSpecs);

  // set player health
  status.setPlayerHealth(playerSpecs);

  // set player power bar
  status.setPowerBar(playerSpecs);

  // set player overpower
  status.setPlayerOverpower(playerSpecs);

  // count killed enimies
  status.countKilledEnemies(playerSpecs);

  // count medium weapon
  status.countMediumWeapons(playerSpecs);

  // count heavy weapons
  status.countHeavyWeapons(playerSpecs);

  // set score
  status.setScore(playerSpecs);

  // fix power bar
  // status.powerBar(playerSpecs);

  // overpower
  op.overpower(playerSpecs);

  // shoot bullets
  shoot.shootBullet(playerSpecs);

  // crate enemy lever one
  enemy.createEnemy(playerSpecs);

  // get collision between
  collision.playerEnemyCollision(playerSpecs);

  // create stars
  star.createStarts();

  // count time
  time.countTime(playerSpecs);

  /* --------- middle weapon
  ---------------------------------------- */
  weapons.shootMidleWeapon(playerSpecs);

  weapons.shootHeavyWeapon(playerSpecs);

  let x = setInterval(() => {
    let life = document.querySelector("#life");

    if (life.innerHTML === "dead") {
      (() => {
        let gameOver = new Audio("../audio/gameover.mp3");
        gameOver.play();
        clearInterval(x);
      })();
    }
    return;
  }, 0);
}

export { init };
