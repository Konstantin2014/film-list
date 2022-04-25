import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';
const KEY = '30b880cb8af36a78b014f41021bfb163';

export const fetchFilms = async page => {
  const response = await axios.get(
    `${URL}trending/movies/day?api_key=${KEY}&page=${page}`
  );
  return response.data.results;
};
