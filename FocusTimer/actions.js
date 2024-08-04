import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";
import * as display from "./display.js";
import { getTime } from "./timeUtils.js";

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

  display.update(minutes, seconds);
  sounds.buttonPressAudio.play();
  sounds.kitchenTimer.play();
}

export function set() {
  let { minutes, seconds } = getTime();

  console.log("set " + minutes, seconds);
  display.update(minutes, seconds);
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

export { musicForest, musicRain, musicCafe, musicFirePlace } from "./music.js";
