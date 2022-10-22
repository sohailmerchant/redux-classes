import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import store from "./store";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Registration from "./pages/Register";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
