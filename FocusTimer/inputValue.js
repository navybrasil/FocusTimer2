import state from "./state.js";
import * as el from "./elements.js";
import * as display from "./display.js";
import { getTime } from "./timeUtils.js";

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = "";
  });

  el.minutes.onkeypress = (event) => /\d/.test(event.key);

  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent;
    time = time > 60 ? 60 : time;

    if (time == "") {
      const { minutes, seconds } = state;
      display.update(minutes, seconds);

      return;
    }

    getTime(time, state.seconds);

    display.update();
    el.minutes.removeAttribute("contenteditable");
  });
}
