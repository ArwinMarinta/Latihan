// import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";
import { getSearchMovie } from "../redux/action/movieAction";

// import { IMAGE_URL_CARD } from "../../constants/config";
// import { convertDate } from "../../utils";

const SearchMovie = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const query = searchParams.get("query");
  const page = searchParams.get("page");
  // const [isLoading, setIsLoading] = useState(false);
  const IMAGE_URL_CARD = "https://image.tmdb.org/t/p/w342";

  const { search } = useSelector((state) => state.movie);

  console.log(search);

  useEffect(() => {
    dispatch(getSearchMovie(query, page));
  }, [dispatch, query, page, searchParams]);

  return (
    <>
      <section className="container min-h-[100vh] pb-10 pt-28">
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
          {search.map((movie) => (
            <div key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <div className="relative w-full rounded-md border-2 border-slate-900 bg-transparent transition-transform hover:-translate-y-1">
                  <img
                    src={
                      movie.poster_path
                        ? IMAGE_URL_CARD + movie.poster_path
                        : "/images/image-not-found.jpg"
                    }
                    alt={movie.title}
                    className="h-[369px] max-h-[369px] w-full rounded-md object-cover"
                  ></img>
                  <div className="absolute bottom-0 left-0 right-0 rounded-b-md bg-gradient-to-t from-black to-white/0 px-3 pb-4 pt-10 text-white">
                    <h1 className="line-clamp-3 text-2xl font-bold">
                      {movie.title}
                    </h1>
                    <p className="font-semibold">{movie.release_date}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SearchMovie;
