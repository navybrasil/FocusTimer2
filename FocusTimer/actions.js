import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";
import { kitchenTimer } from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
  sounds.buttonPressAudio.play();
}

export function reset() {
  let minutes = 0;
  let seconds = 0;
  state.isRunning = false;
  document.documentElement.classList.remove("running");

  timer.updateDisplay(minutes, seconds);
  sounds.buttonPressAudio.play();
  kitchenTimer.play();
}

export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}

export function increase5Minutes() {
  sounds.buttonPressAudio.play();
  timer.plus();
}

export function decrease5Minutes() {
  sounds.buttonPressAudio.play();
  timer.minus();
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

  document.documentElement.classList.toggle(action);
  sounds[`${action}`].play();

  state.playMusic = action;
}
