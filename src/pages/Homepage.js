import MainLayout from "./layouts/MainLayout";
import { Link } from "react-router-dom";

// email
// password

function Homepage() {
  return (
    <MainLayout>
      <div className="App pt-10">
        <h1 className="text-4xl font-bold mb-10">
          Welcome to React<span className="text-red-600">Flix</span>
        </h1>
        <Link
          to="/login"
          className=" text-white px-4 py-2 bg-red-600 mr-2 hover:bg-red-800"
        >
          Login
        </Link>
        <Link
          to="/register"
          className=" text-white px-4 py-2 bg-red-600 mr-2 hover:bg-red-800"
        >
          Register
        </Link>
      </div>
    </MainLayout>
  );
}

export default Homepage;
