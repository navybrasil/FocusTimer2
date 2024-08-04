import state from "./state.js";
import { reset } from "./actions.js";
import { kitchenTimer } from "./sounds.js";
import * as display from "./display.js";

export function countdown() {
  clearTimeout(state.countdownId);

  if (!state.isRunning) {
    return;
  }

  let { minutes, seconds } = state;

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    reset();
    kitchenTimer.play();
    return;
  }

  display.update(minutes, seconds);

  state.countdownId = setTimeout(() => countdown(), 1000);
}

export function plus() {
  let { minutes, seconds } = state;

  minutes += 5;

  display.update(minutes, seconds);
}

export function minus() {
  let { minutes, seconds } = state;

  minutes -= 5;
  if (minutes < 0) {
    reset(state.playMusic);

    return;
  }
  state.minutes = minutes;
  display.update(minutes, seconds);
}
