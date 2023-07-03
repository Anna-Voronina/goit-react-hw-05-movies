import { Link } from 'react-router-dom';

const MovieDetails = () => {
  const links = [
    { path: 'cast', title: 'Cast' },
    { path: 'reviews', title: 'Reviews' },
  ];

  return (
    <ul>
      {links.map(({ path, title }) => (
        <li key={path}>
          <Link to={path}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieDetails;
