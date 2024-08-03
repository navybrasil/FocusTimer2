import state from "./state.js";
import * as el from "./elements.js";
import * as display from "./display.js";
import * as handle from "./handleClick.js";

export function registerControls() {
  el.controls.addEventListener("click", handle.ControlClick);
  el.controlsMusic.addEventListener("click", handle.ControlClick);
}

export function setMinutes() {
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = "";
  });

  el.minutes.onkeypress = (event) => /\d/.test(event.key);

  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent;
    time = time > 60 ? 60 : time;

    if (time == "") {
      time = state.minutes;
      display.update(minutes, seconds);
      return;
    }

    state.minutes = time;
    state.seconds = 0;

    display.update();
    el.minutes.removeAttribute("contenteditable");
  });
}
