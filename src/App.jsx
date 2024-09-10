import useCounterStore from "./store/counterStore";
import "./App.css";

/**
 * React component displaying a counter with increment and decrement buttons.
 */
function App() {
  // Access the current count value from the store
  const countvar = useCounterStore((state) => state.count);

  // Access the increment function from the store
  const incrementvar = useCounterStore((state) => state.increment);

  // Access the decrement function from the store
  const decrementvar = useCounterStore((state) => state.decrement);

  return (
    <>
      <h1>Zustand + React</h1>
      <div className="card">
        {/* Button to increment the count */}
        <button onClick={incrementvar}>Increment Count</button>

        {/* Display the current count */}
        <h1>Count is {countvar}</h1>

        {/* Button to decrement the count */}
        <button onClick={decrementvar}>Decrement Count</button>
      </div>
    </>
  );
}

export default App;
