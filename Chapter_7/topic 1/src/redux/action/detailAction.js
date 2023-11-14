import axios from "axios";
import { setDetailMovie } from "../reducers/detailReducer.js";
// import { useParams } from "react-router-dom";

export const getDetailMovie =
  (movieId, setErrors, errors) => async (dispatch) => {
    // const { movieId } = useParams();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/movie/${movieId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response.data;
      console.log(data);
      dispatch(setDetailMovie(data));
      setErrors({ ...errors, isError: false });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrors({
          ...errors,
          isError: true,
          message: error?.response?.data?.message || error?.message,
        });
        return;
      }

      alert(error?.message);
      setErrors({
        ...errors,
        isError: true,
        message: error?.message,
      });
    }
  };
