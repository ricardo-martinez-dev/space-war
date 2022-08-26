import * as ship from "./module/choose-ship.js";
import * as name from "./module/player-name.js";
import * as msc from "./module/music.js";
import * as optscr from "./module/hide-optioins-screen.js";
import * as setOpt from "./module/set-options.js";
import * as playingNotPossible from "./module/playing-not-possible.js";

if (window.innerWidth < 1200) {
  playingNotPossible.playingNotPossible();
} else {
  let options = setOpt.setOptions();

  // toggle music on/off
  msc.playerMusic();

  // choose player ship
  ship.chooseShip(options);

  // set player name
  name.playerName(options);

  // hide options screen and start game
  optscr.hideOptionsScreen(options);
}
