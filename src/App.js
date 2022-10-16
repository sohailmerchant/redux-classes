import Test from "./components/Test";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <Provider store={store}>
      <div className="App pt-10">
        <h1 className="text-4xl font-bold mb-10">My React App</h1>
        <MoviesList />
      </div>
    </Provider>
  );
}

export default App;
