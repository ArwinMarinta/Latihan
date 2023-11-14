import axios from "axios";
import { setPopular } from "../reducers/moveReduceer";
import { setSearch } from "../reducers/moveReduceer";

export const getPopularMovie =
  (setErrors, errors) => async (dispatch, getState) => {
    try {
      const { token } = getState().auth;
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/movie/popular`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response.data;
      dispatch(setPopular(data));
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

export const getSearchMovie = (query, page) => async (dispatch, getState) => {
  // setIsLoading(true);
  try {
    let { token } = getState().auth;
    const response = await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }/api/v1/search/movie?page=${page}&query=${query}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const { data } = response.data;
    dispatch(setSearch(data));
    // setIsLoading(false);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error?.response?.data?.status_message);
      return;
    }
    alert(error?.status_message);
  }
};
