import * as events from "./events.js";
import * as display from "./display.js";
import * as input from "./inputValue.js";

export function start(minutes, seconds) {
  display.update();

  events.registerControls();

  input.setMinutes();
}
