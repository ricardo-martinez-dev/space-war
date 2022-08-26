function highlightWeaponNum(playerSpecs) {
  let heavyInfo = document.querySelector("#heavy-info");
  let middleInfo = document.querySelector("#middle-info");
  let speedInfo = document.querySelector("#speed-info");
  setInterval(
    (playerSpecs) => {
      let heavy = playerSpecs.weapons.heavy;
      let middle = playerSpecs.weapons.medium;
      let overpower = playerSpecs.overpower;
      heavy > 0
        ? (heavyInfo.style.color = "yellow")
        : (heavyInfo.style.color = "gray");

      middle > 0
        ? (middleInfo.style.color = "yellow")
        : (middleInfo.style.color = "gray");

      overpower > 0
        ? (speedInfo.style.color = "yellow")
        : (speedInfo.style.color = "gray");
    },
    10,
    playerSpecs
  );
}

export { highlightWeaponNum };
