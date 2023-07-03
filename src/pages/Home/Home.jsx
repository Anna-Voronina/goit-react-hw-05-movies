import { fetchTrendingMovies } from 'services/movie-api';

const Home = () => {
  const response = fetchTrendingMovies();

  console.log(response);

  return (
    <main>
      <h1>Trending today</h1>;
    </main>
  );
};

export default Home;
