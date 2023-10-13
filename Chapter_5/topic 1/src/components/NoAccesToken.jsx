import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NoAccesToken = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const getMe = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }

        await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        navigate("/");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // If token is not valid
          if (error.response.status === 401) {
            localStorage.removeItem("token");
            return;
          }

          alert(error?.response?.data?.message);
          return;
        }

        alert(error?.message);
      }
    };

    getMe();
  }, []);
  return children;
};

export default NoAccesToken;
