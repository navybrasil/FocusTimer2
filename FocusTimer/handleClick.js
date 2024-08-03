import * as actions from "./actions.js";

export function ControlClick(event) {
  const action = event.target.dataset.action;

  if (typeof actions[action] === "function") {
    actions[action](action);
  }
}
