import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getPopularMovie = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/3/movie/popular?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API__AUTH_TOKEN}`,
            },
          }
        );
        const { data } = response;
        setPopularMovies(data?.results);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error?.response?.data?.status_message);
          return;
        }

        alert(error?.message);
      }
    };
    getPopularMovie();
  }, []);

  if (popularMovies.length === 0) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      {popularMovies.map((movie) => (
        <div key={movie?.id}>
          <h1>{movie?.title}</h1>
          <p>{movie?.overview}</p>
        </div>
      ))}
    </>
  );
};

export default Home;
