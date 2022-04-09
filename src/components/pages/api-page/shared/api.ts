const API_KEY = '1cf50e6248dc270629e802686245c2c8';
const URL = 'https://api.themoviedb.org/3';

export const getPopularMovie = async () => {
  const response = await fetch(`${URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  const data = await response.json();
  return data;
};

export const getMovies = async (id: string) => {
  const response = await fetch(`${URL}//movie/${id}?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();
  return data;
};

export const getSearch = async (q: string) => {
  const response = await fetch(
    `${URL}/search/movie?api_key=${API_KEY}&query=${q}&language=en-US&page=1`
  );
  const data = await response.json();
  return data;
};
