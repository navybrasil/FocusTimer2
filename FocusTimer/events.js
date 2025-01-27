import * as el from "./elements.js";
import * as handle from "./handleClick.js";

export function registerControls() {
  document.addEventListener("keydown", handle.keyboardControl);
  el.controls.addEventListener("click", handle.ControlClick);
  el.controlsMusic.addEventListener("click", handle.ControlClick);
}
