import {create} from 'zustand';

/**
 * @typedef {Object} CounterState
 * @property {number} count
 * @property {() => void} increment
 * @property {() => void} decrement
 */

/** 
 * Zustand store for counter state management.
 * @type {import('zustand').UseStore<CounterState>}
 */


const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;
