import React, { useState } from "react";

function ToggleMessage() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Show / Hide Message</button>
      {show && <h3>Hello React</h3>}
    </div>
  );
}

export default ToggleMessage;
