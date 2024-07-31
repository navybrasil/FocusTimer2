import state from "./state.js";
import { controls } from "./elements.js";
import * as actions from "./actions.js";
import * as el from "./elements.js";
import { updateDisplay } from "./timer.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (typeof actions[action] != "function") {
      return;
    }

    actions[action]();
  });
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
      updateDisplay(minutes, seconds);
      return;
    }

    state.minutes = time;
    state.seconds = 0;

    updateDisplay();
    el.minutes.removeAttribute("contenteditable");
  });
}

export function registerControlsMusic() {
  el.controlsMusic.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (typeof actions[action] != "function") {
      return;
    }

    actions[action](action);
  });
}
