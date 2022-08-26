function playerName(options) {
  // player name input
  let nameInput = document.querySelector("#name-input");
  // start button
  let startBtn = document.querySelector("#start-btn");

  startBtn.addEventListener("click", () => {
    options.playerName = nameInput.value;
    console.log(options.playerName);
  });
}

export { playerName };
