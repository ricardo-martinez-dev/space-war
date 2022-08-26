function chooseShip(options) {
  let ship = document.querySelectorAll(".ship");
  let playerShip = document.querySelector("#player-ship");

  playerShip.src = "./img/player-ship-2.png";

  for (let i = 0; i < ship.length; i++) {
    ship[i].addEventListener("click", () => {
      // change ship buttons border to white
      ship.forEach((el) => (el.style.border = "0.1rem solid white"));

      // change clicked button border to yellow
      ship[i].style.border = "0.1rem solid yellow";

      // set ship

      let shipImg = ship[i].querySelector("img").src.split("/");
      shipImg = shipImg[shipImg.length - 1];

      playerShip.src = "./img/" + shipImg;
    });
  }
}

export { chooseShip };
