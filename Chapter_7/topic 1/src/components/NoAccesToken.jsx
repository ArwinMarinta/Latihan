import { useEffect } from "react";
import { getMe } from "../redux/action/authAction";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const NoAccesToken = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe(navigate, "/", null));
  }, [dispatch, navigate]);
  return children;
};

export default NoAccesToken;
