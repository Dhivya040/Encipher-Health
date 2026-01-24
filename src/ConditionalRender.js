import React, { useState } from "react";

function ConditionalRender() {
  const [isLoggedIn] = useState(true);
  return (
    <div>
      <h2>{isLoggedIn ? "Welcome User" : "Please Login"}</h2>
    </div>
  );
}

export default ConditionalRender;
