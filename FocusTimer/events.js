import state from "./state.js";
import * as el from "./elements.js";
import * as handle from "./handleClick.js";

export function registerControls() {
  el.controls.addEventListener("click", handle.ControlClick);
  el.controlsMusic.addEventListener("click", handle.ControlClick);
}
