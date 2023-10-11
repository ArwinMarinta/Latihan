import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieItem from "../components/MovieItem";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    const getPopularMovie = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/movie/popular`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { data } = response.data;
        setPopularMovies(data);
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
    getPopularMovie();
  }, [errors]);

  if (popularMovies.length === 0) {
    return <h1>Loading....</h1>;
  }

  return (
    <Container>
      <Row className="g-5">
        {popularMovies.map((movie) => (
          <Col key={movie?.id} md={3}>
            <MovieItem
              id={movie?.id}
              imageURL={import.meta.env.VITE_IMAGE_URL + movie?.poster_path}
              overview={movie?.overview}
              title={movie?.tittle}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
