import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import NewWorkOrderHookForm from "./Components/NewWorkOrderHookForm";
import { StylesProvider } from "@material-ui/core/styles";

function App() {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <Navigation />
        <NewWorkOrderHookForm />
      </StylesProvider>
    </div>
  );
}

export default App;
