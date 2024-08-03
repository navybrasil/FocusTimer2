import state from "./state.js";
import * as events from "./events.js";
import * as timer from "./timer.js";
import * as display from "./display.js";

export function start(minutes, seconds) {
  state.minutes = minutes;
  state.seconds = seconds;

  display.update();

  events.registerControls();

  events.setMinutes();
}
