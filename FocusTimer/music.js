import state from "./state.js";
import * as sounds from "./sounds.js";

export function musicForest(action) {
  toggleCardsMusic(action);
}

export function musicRain(action) {
  toggleCardsMusic(action);
}

export function musicCafe(action) {
  toggleCardsMusic(action);
}

export function musicFirePlace(action) {
  toggleCardsMusic(action);
}

export function toggleCardsMusic(action) {
  const oldMusic = state.playMusic;

  if (oldMusic) {
    document.documentElement.classList.remove(oldMusic);
    sounds[`${oldMusic}`].pause();
    state.playMusic = null;

    if (oldMusic == action) {
      return;
    }
  }

  document.documentElement.classList.toggle(action);
  sounds[`${action}`].play();

  state.playMusic = action;
}
