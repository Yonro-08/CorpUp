import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "hooks/redux";
import { authMe } from "../store/slices/authSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(authMe(true));
      return;
    }
    navigate("/signin");
  }, []);

  return <div></div>;
};

export default Home;
