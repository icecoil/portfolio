import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import ThemeProvider from "./context/ThemeContext/ThemeProvider";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </div>
  );
}

export default App;
