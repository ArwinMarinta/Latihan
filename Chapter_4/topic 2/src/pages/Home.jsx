import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieItem from "../components/MovieItem";

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
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
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
