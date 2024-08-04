import state from "./state.js";
import * as el from "./elements.js";

export function update(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;
  minutes = minutes > 99 ? 99 : minutes;

  state.minutes = minutes;
  state.seconds = seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
