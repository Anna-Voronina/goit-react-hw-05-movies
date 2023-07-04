import { formatDateToYear } from 'services/format-date';
import defaultPoster from './../../images/no-poster-available.jpg';

export const MovieInfo = ({ movie }) => {
  const { title, genres, poster_path, overview, release_date, vote_average } =
    movie;

  const countUserScorePercentage = score => {
    const userScore = Number(score);
    return Math.round((userScore * 100) / 10);
  };

  const releaseYear = formatDateToYear(release_date);
  const userScorePercentage = countUserScorePercentage(vote_average);

  return (
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : `${defaultPoster}`
        }
        alt={title}
      />
      <div>
        <h1>{`${title} (${releaseYear})`}</h1>
        <p>{`User score: ${userScorePercentage}%`}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};