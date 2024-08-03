import state from "./state.js";
import * as el from "./elements.js";

export function update(minutes, seconds) {
  /* pesquisar nullish coalesing operator */
  minutes = minutes ?? state.minutes; // se minutes for null (não receber valor) então pega a informação que está no state.minutes
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
