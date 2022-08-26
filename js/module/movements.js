function movePlayer(playerSpecs) {
  document.onkeydown = checkKey;

  // player
  let player = document.querySelector("#player");

  // get player current postion
  let playerHorizontalPosition = player.offsetLeft;

  // check pressed key and more player
  function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == "37") {
      // left arrow
      if (playerSpecs.position.left <= 10) {
        playerSpecs.position.left = 10;
        return;
      }

      playerHorizontalPosition -= playerSpecs.speed;
      playerSpecs.position.left = playerHorizontalPosition;

      // reposition player
      setPlayerPositionOnKeyDown(player, playerSpecs.position);
    } else if (e.keyCode == "39") {
      // right arrow
      if (playerSpecs.position.left >= 470) {
        playerSpecs.position.left = 470;
        return;
      }

      playerHorizontalPosition += playerSpecs.speed;
      playerSpecs.position.left = playerHorizontalPosition;

      // reposition player
      setPlayerPositionOnKeyDown(player, playerSpecs.position);
    }
  }
}

// set player new position based on the key pressed
function setPlayerPositionOnKeyDown(player, position) {
  player.style.left = position.left + "px";
}

export { movePlayer };
