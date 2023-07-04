import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieCast } from 'services/movie-api';
import defaultProfileImg from './../../images/default-profile-image.png';

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(({ data }) => {
        const cast = data.cast;
        setMovieCast(cast);
      })
      .catch(error => toast.error(error.message));
  }, [movieId]);

  return (
    <ul>
      {movieCast.map(({ id, name, profile_path, character }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : `${defaultProfileImg}`
            }
            alt={name}
          />
          <h3>{name}</h3>
          <p>{`Character: ${character}`}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
