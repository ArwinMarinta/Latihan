// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovie } from "../redux/action/detailAction";
import { useParams } from "react-router-dom";

const DetailMovie = () => {
  const [previousMovieId, setPreviousMovieId] = useState(null);
  const { movieId } = useParams();

  console.log(movieId);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  const { detailMovie } = useSelector((state) => state.detail);

  useEffect(() => {
    // Cek apakah `movieId` berubah
    if (movieId !== previousMovieId) {
      dispatch(getDetailMovie(movieId, setErrors, errors));
      // Simpan `movieId` saat ini sebagai `previousMovieId`
      setPreviousMovieId(movieId);
    }
  }, [movieId, dispatch, errors, previousMovieId]);

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  // if (DetailMovie.length === 0) {
  //   return <h1>Loading....</h1>;
  // }
  console.log(detailMovie?.original_title);
  return (
    <div className="relative">
      <img
        src={`${import.meta.env.VITE_API_IMAGE_URL}${
          detailMovie?.backdrop_path
        }`}
        className="w-full"
      />

      <div className="absolute top-4 bottom-4 left-8  flex items-center">
        <div className="flex flex-col justify-center gap-10 lg:pl-56 ">
          <div className="md:text-6xl text-red-600 font-bold text-xl">
            {detailMovie?.original_title}
          </div>
          <div className="flex flex-row gap-3 lg: text-lg font-bold">
            {detailMovie?.genres?.map((gendre) => (
              <div key={gendre?.id}>
                <p>{gendre?.name}</p>
              </div>
            ))}
          </div>
          <div className="lg:text-2xl  w-[50%] md:font-semibold ">
            {detailMovie?.overview}
          </div>
          <div className="md:text-lg  flex flex-row gap-2">
            <div>{detailMovie?.vote_average}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
