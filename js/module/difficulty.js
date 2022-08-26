function chooseDifficulty(options) {
  let diff = document.querySelectorAll(".difficulty");

  for (let i = 0; i < diff.length; i++) {
    diff[i].addEventListener("click", () => {
      // change difficulty buttons border to white
      diff.forEach((el) => (el.style.border = "0.1rem solid white"));

      // change clicked button border to yellow
      diff[i].style.border = "0.1rem solid yellow";

      // set difficulty
      options.difficulty = diff[i].innerHTML;

      console.log(options.difficulty);
    });
  }

  return diff;
}

export { chooseDifficulty };
