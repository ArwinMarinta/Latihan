import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieItem from "../components/MovieItem";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovie } from "../redux/action/movieAction";

const Home = () => {
  const dispatch = useDispatch();

  const { popular } = useSelector((state) => state.movie);

  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getPopularMovie(setErrors, errors));
  }, [dispatch, errors]);

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  if (popular.length === 0) {
    return <h1>Loading....</h1>;
  }
  return (
    <Container>
      <Row className="g-5">
        {popular.map((movie) => (
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
