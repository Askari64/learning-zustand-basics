import { create } from "zustand";

/**
 * @typedef {Object} CounterState
 * @property {number} count - Current count value.
 * @property {() => void} increment - Increases the count by 1.
 * @property {() => void} decrement - Decreases the count by 1.
 */

/**
 * Zustand store for managing counter state.
 * Provides `count`, `increment`, and `decrement` functionalities.
 * @type {import('zustand').UseStore<CounterState>}
 */
const useCounterStore = create((set) => ({
  // Initial state with a count of 0
  count: 0,

  // Function to increment the count by 1
  increment: () => set((state) => ({ count: state.count + 1 })),

  // Function to decrement the count by 1
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;
