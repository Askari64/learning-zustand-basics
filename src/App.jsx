import useCounterStore from "./store/counterStore";
import "./App.css";

function App() {

  const countvar = useCounterStore((state) => state.count)
  const incrementvar = useCounterStore((state) => state.increment)
  const decrementvar = useCounterStore((state) => state.decrement)

  return (
    <>
      <h1>Zustand + React</h1>
      <div className="card">
        <button onClick={incrementvar} >Increment Count</button>
        <h1>Count is {countvar}</h1>
        <button onClick={decrementvar}>Decrement Count</button>
      </div>
    </>
  );
}

export default App;
