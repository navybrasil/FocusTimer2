import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
  sounds.buttonPressAudio.play();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");

  timer.updateDisplay();
  sounds.buttonPressAudio.play();
}

export function toggleCardsMusic(action) {
  const oldMusic = state.playMusic;

  if (oldMusic) {
    document.documentElement.classList.remove(oldMusic);
    sounds[`${oldMusic}`].pause();
    state.playMusic = null;

    if (oldMusic == action) {
      return;
    }
  }

  console.log("PLaying ", action);
  document.documentElement.classList.toggle(action);
  sounds[`${action}`].play();

  state.playMusic = action;
}

export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");

  if (state.isMute) {
    sounds.bgAudio.play();
    return;
  }

  sounds.bgAudio.pause();
}

export function musicForest(action) {
  toggleCardsMusic(action);
}

export function musicRain(action) {
  toggleCardsMusic(action);
}

export function musicCafe(action) {
  toggleCardsMusic(action);
}

export function musicFirePlace(action) {
  toggleCardsMusic(action);
}
