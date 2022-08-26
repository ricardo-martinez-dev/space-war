function playerMusic() {
  let musicOff = document.querySelector("#music-off");
  let musicOn = document.querySelector("#music-on");
  let music = new Audio("../audio/music.mp3");

  // play music on "music on" button click
  musicOn.addEventListener("click", () => {
    music.play();
    music.loop = true;
    music.volume = 0.5;

    musicOff.style.border = "0.1rem solid white";
    musicOn.style.border = "0.1rem solid yellow";
  });

  musicOff.addEventListener("click", () => {
    music.pause();
    music.currentTime = 0;

    musicOff.style.border = "0.1rem solid yellow";
    musicOn.style.border = "0.1rem solid white";
  });
}

export { playerMusic };
