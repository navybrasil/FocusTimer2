import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";
import { kitchenTimer } from "./sounds.js";
import * as display from "./display.js";
import { getTime } from "./timeUtils.js";

export function countdown() {
  clearTimeout(state.countdownId);

  if (!state.isRunning) {
    return;
  }

  const { minutes, seconds } = getTime();

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

  /* callback */
  state.countdownId = setTimeout(() => countdown(), 1000); // função de recursão, quando ela se chama em algum momento
}

export function plus() {
  let { minutes, seconds } = getTime();

  minutes += 5;
  state.minutes = minutes;
  display.update(minutes, seconds);
}

export function minus() {
  let { minutes, seconds } = getTime();

  minutes -= 5;
  if (minutes < 0) {
    reset();

    return;
  }
  state.minutes = minutes;
  display.update(minutes, seconds);
}
