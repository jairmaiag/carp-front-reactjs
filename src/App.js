import React from "react";
import 'materialize-css/dist/css/materialize.min.css';

import Route from "./routes";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Route />
    </div>
  );
}

export default App;
