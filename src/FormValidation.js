import React, { useState } from "react";

function FormValidation() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      setError("Username is required");
    } else {
      setError("");
      alert("Form Submitted");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Username"
      />
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default FormValidation;
