import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./pages/Login";
import Registration from "./pages/Register";

function App() {
  return (
    <Provider store={store}>
      {/* <Login /> */}
      <Registration />
    </Provider>
  );
}

export default App;
