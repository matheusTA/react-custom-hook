import React from "react";
import useNetwork from "./hooks/useNetwork";
import GlobalStyle from "./styles";

import Home from "./pages/Home";
import NotNetwork from "./pages/NotNetwork";

function App() {
  const network = useNetwork();

  return (
    <>
      <div className="App">
        <h1>{network ? <Home /> : <NotNetwork />}</h1>
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;
