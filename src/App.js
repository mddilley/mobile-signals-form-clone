import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import NewWorkOrder from "./Components/NewWorkOrder";

function App() {
  return (
    <div className="App">
      <Navigation />
      <NewWorkOrder />
    </div>
  );
}

export default App;
