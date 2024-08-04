import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";
import * as display from "./display.js";
import { pauseMusic } from "./music.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
  sounds.buttonPressAudio.play();
}

export function reset() {
  const minutes = 0;
  const seconds = 0;
  state.isRunning = false;
  document.documentElement.classList.remove("running");

  display.update(minutes, seconds);
  sounds.buttonPressAudio.play();
  sounds.kitchenTimer.play();
  pauseMusic(state.playMusic);
}

export function set() {
  const { minutes, seconds } = state;

  if (state.isRunning === true) {
    toggleRunning();
  }

  el.minutes.setAttribute("contenteditable", true);
  display.update(minutes, seconds);

  el.minutes.textContent = "";
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

export { musicForest, musicRain, musicCafe, musicFirePlace } from "./music.js";
