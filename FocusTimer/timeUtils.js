import * as el from "./elements.js";
import state from "./state.js";

export function getTime() {
  state.minutes = Number(el.minutes.textContent);
  state.seconds = Number(el.seconds.textContent);

  return { minutes: state.minutes, seconds: state.seconds };
}
