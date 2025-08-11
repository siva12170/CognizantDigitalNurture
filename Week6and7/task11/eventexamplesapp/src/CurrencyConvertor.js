import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const conversionRate = 0.011; 
    const converted = parseFloat(rupees) * conversionRate;
    setEuros(converted.toFixed(2));
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount in Rupees"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euros && <p>{rupees} INR = {euros} EUR</p>}
    </div>
  );
}

export default CurrencyConvertor;
