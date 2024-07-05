import { writable } from "svelte/store"

function createIsOnMainScreen() {
  const { subscribe, update } = writable(true)

  return {
    subscribe,
    toggle: () => update((prevState) => !prevState),
  }
}

export const isOnMainScreen = createIsOnMainScreen()
