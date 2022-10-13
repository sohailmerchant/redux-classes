import { useState, createContext } from "react";
import Test from "./components/Test";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>My React App</h1>
        <Test />
      </div>
    </Provider>
  );
}

export default App;
