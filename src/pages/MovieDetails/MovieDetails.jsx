import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieDetails } from 'services/movie-api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { CgArrowLeft } from 'react-icons/cg';

const MovieDetails = () => {
  const links = [
    { path: 'cast', title: 'Cast' },
    { path: 'reviews', title: 'Reviews' },
  ];

  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkLocation = location?.state?.from || '/';

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(response => {
        const movieInfo = response.data;
        setMovie(movieInfo);
      })
      .catch(error => toast.error(error.message));
  }, [movieId]);

  if (!movie) return;

  return (
    <main>
      <button type="button">
        <Link to={backLinkLocation}>
          <CgArrowLeft />
          <span>Go back</span>
        </Link>
      </button>
      <MovieInfo movie={movie} />
      <h3>Additional information</h3>
      <ul>
        {links.map(({ path, title }) => (
          <li key={path}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
