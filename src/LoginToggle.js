import React, { useState } from "react";

function LoginToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      {isLoggedIn && <h3>Dashboard</h3>}
    </div>
  );
}

export default LoginToggle;
