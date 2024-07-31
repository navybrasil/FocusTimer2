import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";
import { kitchenTimer } from "./sounds.js";

export function countdown() {
  clearTimeout(state.countdownId);

  if (!state.isRunning) {
    return;
  }

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

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

  updateDisplay(minutes, seconds);

  /* callback */
  state.countdownId = setTimeout(() => countdown(), 1000); // função de recursão, quando ela se chama em algum momento
}

export function plus() {
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  minutes += 5;
  state.minutes = minutes;
  updateDisplay(minutes, seconds);
}

export function minus() {
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  minutes -= 5;
  if (minutes < 0) {
    minutes = 0;
    return;
  }
  state.minutes = minutes;
  updateDisplay(minutes, seconds);
}

export function updateDisplay(minutes, seconds) {
  /* pesquisar nullish coalesing operator */
  minutes = minutes ?? state.minutes; // se minutes for null (não receber valor) então pega a informação que está no state.minutes
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
