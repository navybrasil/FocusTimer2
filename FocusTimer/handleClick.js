import * as actions from "./actions.js";

export function ControlClick(event) {
  const action = event.target.dataset.action;

  if (typeof actions[action] === "function") {
    actions[action](action);
  }
}

export function keyboardControl(event) {
  const actionMap = {
    p: "toggleRunning",
    r: "reset",
    s: "set",
    "+": "increase5Minutes",
    "-": "decrease5Minutes",
  };

  const action = actionMap[event.key];

  if (action) {
    setTimeout(() => {
      const customEvent = {
        target: {
          dataset: {
            action: action,
          },
        },
      };
      ControlClick(customEvent);
    }, 100);

    if (document.activeElement) {
      document.activeElement.blur();
    }
  }
}
