import * as levelOneEnemy from "./create-level-one-enemy.js";
import * as setOpt from "./set-options.js";

let opt = setOpt.setOptions();

function setDifficulty(obj, playerSpecs) {
  let { counter, decr, condition } = obj;
  const x = setInterval(() => {
    counter -= decr;
    createEnemy(playerSpecs);
    counter <= condition ? (counter = counter) : null;
    clearInterval(x);
  }, counter);
}

// create enemy
function createEnemy(playerSpecs) {
  levelOneEnemy.createEnemyLevelOne(playerSpecs);
  const { difficulty } = opt;

  let diff =
    difficulty === "easy"
      ? {
          counter: 2000,
          decr: 200,
          condition: 400,
        }
      : difficulty === "normal"
      ? {
          counter: 1500,
          decr: 100,
          condition: 300,
        }
      : {
          counter: 1000,
          decr: 50,
          condition: 0,
        };

  setDifficulty(diff, playerSpecs);
}

export { createEnemy };
