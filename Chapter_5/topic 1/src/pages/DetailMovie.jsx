import { useParams } from "react-router-dom";

const DetailMovie = () => {
  const { movieId } = useParams();
  return <div>{movieId}</div>;
};

export default DetailMovie;
