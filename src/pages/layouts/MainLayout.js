import { Link } from "react-router-dom";

const MainLayout = (props) => {
  return (
    <div className="grid">
      <div className="w-full h-18 bg-black text-white">
        <Link to="/">
          <h1 className="w-1/2 float-left text-4xl font-bold m-2">
            React Flix
          </h1>
        </Link>
        <div className="float-right mr-10 m-2 pt-2">
          <Link
            to="/login"
            className="px-4 py-2 bg-red-600 mr-2 hover:bg-red-800"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-red-600 :hover-bg-red-800 hover:bg-red-800"
          >
            Registration
          </Link>
        </div>
      </div>

      {props.children}
    </div>
  );
};

export default MainLayout;
