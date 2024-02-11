import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [status, setStatus] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(bmi);
    if (bmi < 18.5) {
      setStatus("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setStatus("Normal weight");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };

  const reset = () => {
    setWeight(0);
    setHeight(0);
    setBmi(0);
    setStatus("");
  };

  return (
    <div className="main-container">
      <div className="bmi-container">
        <h1 className="heading">BMI Calculator</h1>
        <form className="form-group" onSubmit={calculateBMI}>
          <div className="form-group">
            <label>Weight (kg)</label>
            <input
              type="number"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Height (cm)</label>
            <input
              type="number"
              placeholder="Enter height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <button type="submit">Calculate</button>
          <button type="reset" onClick={reset}>
            Reset
          </button>
          <div className="result">
            <p>Your BMI is: {bmi}</p>
            <p>You are: {status}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;
