import './App.css';
import {useState} from "react";

function App() {
  const [minimum, setMinimum] = useState(null);
  const [maximum, setMaximum] = useState(null);
  const [randomNumber, setRandomNumber] = useState(0);
  const [error, setError] = useState("");

  const updateRandomNumber = () => {
    setError("");
    if(minimum === null || maximum === null) {
      console.log("minimum", minimum);
      console.log("maximum", maximum);
      setError("Please enter both a maximum and a minimum");
      return;
    }
    if(maximum < minimum) {
      setError("Maximum must be greater than or equal to minimum");
      return
    }

    setError("");
    if(minimum !== undefined && maximum !== undefined && maximum >= minimum) {
      setRandomNumber(Math.floor(Math.random() * (maximum - minimum)) + minimum);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        {error && <p style={{color: "red"}}>{error}</p>}
        <div>
          <label htmlFor="minimum-input">Minimum</label>
          <input id="minimum-input" data-testid="minimum-input-test" type="number" value={minimum ?? ""} onChange={(e) => setMinimum(Number(e.target.value))} required/>
        </div>
        <div>
          <label htmlFor="maximum-input">Maximum</label>
          <input id="maximum-input" data-testid="maximum-input-test"  type="number" value={maximum ?? ""} onChange={(e) => setMaximum(Number(e.target.value))} required/>
        </div>
        <p>{randomNumber}</p>
        <button onClick={updateRandomNumber}>Get Random Number</button>
      </header>
    </div>
  );
}

export default App;
