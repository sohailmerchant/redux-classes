import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUsers } from "../store/users";

const Test = () => {
  const state = useSelector((state) => state);
  // const visitors = useSelector((state) => state.users.visitors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return <h1>Hello!</h1>;
};

export default Test;
