import state from "./state.js";
import * as el from "./elements.js";
import * as display from "./display.js";

export function setMinutes() {
  el.minutes.onkeypress = (event) => /\d/.test(event.key);

  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent;

    if (isNaN(time) || time === "") {
      const { minutes, seconds } = state;
      display.update(minutes, seconds);

      return;
    }

    display.update(Number(time), state.seconds);

    el.minutes.removeAttribute("contenteditable");
  });
}
