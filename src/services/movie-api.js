import axios from 'axios';

const API_KEY = 'Bearer 8afe3f7ce656145ebc0e0dc4677db87a';

export const fetchTrendingMovies = async () => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: 'Bearer 8afe3f7ce656145ebc0e0dc4677db87a',
  //     },
  //   };

  //   fetch(
  //     'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
  //     options
  //   )
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));

  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day',
    {
      headers: {
        accept: 'application/json',
        Authorization: API_KEY,
      },
    }
    //   { headers: { Authorization: API_KEY } }
  );

  console.log(response);

  return response;
};
