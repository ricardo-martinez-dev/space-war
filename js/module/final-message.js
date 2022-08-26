function finalMessage(playerSpecs) {
  setTimeout(() => {
    const msg = [
      {
        id: "final-point",
        val: playerSpecs.score,
      },
      {
        id: "enemy-killed",
        val: playerSpecs.enemies,
      },
      {
        id: "time-played",
        val: Math.floor(playerSpecs.time / 60) + ":" + (playerSpecs.time % 60),
      },
    ];

    document.querySelector("#final-message").style.display = "block";

    msg.forEach(
      (el) => (document.querySelector(`#${el.id}`).innerHTML = el.val)
    );
  }, 1000);
}

export { finalMessage };
