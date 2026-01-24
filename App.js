import React, { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div style={{
      width: "250px",
      margin: "50px auto",
      textAlign: "center",
      border: "2px solid #000",
      borderRadius: "10px",
      padding: "10px",
      backgroundColor: "#f8f8f8"
    }}>
      <h3>Simple React Calculator</h3>
      <input
        type="text"
        value={input}
        readOnly
        style={{ width: "90%", height: "30px", marginBottom: "10px", textAlign: "right" }}
      />
      <div>
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "+"].map((val) => (
          <button
            key={val}
            onClick={() => handleClick(val)}
            style={{ width: "50px", height: "40px", margin: "3px", fontSize: "16px" }}
          >
            {val}
          </button>
        ))}
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleClear} style={{ width: "100px", height: "40px", margin: "5px" }}>C</button>
        <button onClick={handleEqual} style={{ width: "100px", height: "40px", margin: "5px" }}>=</button>
      </div>
    </div>
  );
}