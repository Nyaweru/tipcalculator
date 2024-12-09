import './App.css';
import { useState } from 'react';

function App() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [total, setTotal] = useState('');

  // Function to calculate tip
  const calculateTip = () => {
    const billValue = parseFloat(bill);
    if (isNaN(billValue) || billValue <= 0) {
      alert('Please enter a valid bill amount.');
      return;
    }

    const calculatedTip =
      billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
    const calculatedTotal = billValue + calculatedTip;

    setTip(calculatedTip.toFixed(2));
    setTotal(calculatedTotal.toFixed(2));
  };

  // Function to reset the form
  const resetCalculator = () => {
    setBill('');
    setTip('');
    setTotal('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tip Calculator</h1>
        <div>
          <label htmlFor="bill">Enter Bill Amount: </label>
          <input
            type="number"
            id="bill"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            placeholder="e.g., 100"
          />
        </div>
        <button onClick={calculateTip}>Calculate Tip</button>
        <button onClick={resetCalculator} style={{ marginLeft: '10px' }}>
          Reset
        </button>
        {tip && total && (
          <div>
            <p>Tip: ${tip}</p>
            <p>Total: ${total}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

