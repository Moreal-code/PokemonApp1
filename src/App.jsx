import PokemonApplication from "./Components/PokemonApplication.jsx";

import "./style/app.css";
import React, { useState } from "react";

function App() {
  const [showApp, setShowApp] = useState(false);
  return (
    <>
      <button onClick={() => setShowApp(!showApp)}>Start Pokemon App</button>
      {showApp ? <PokemonApplication /> : null}
    </>
  );
}

export default App;
