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
    pauseMusic(oldMusic);
    // sounds[`${oldMusic}`].pause();

    state.playMusic = null;

    if (oldMusic == action) {
      return;
    }
  }

  document.documentElement.classList.toggle(action);
  playMusic(action);

  state.playMusic = action;
}

export function playMusic(music) {
  sounds[`${music}`].play();
}

export function pauseMusic(music) {
  sounds[`${music}`].pause();
  if (state.playMusic === music) {
    state.playMusic = null;
    document.documentElement.classList.remove(music);
  }
}
