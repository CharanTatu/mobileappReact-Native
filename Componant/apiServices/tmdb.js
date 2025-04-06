const BASE_URL = 'https://api.themoviedb.org/3/movie';

export const fetchMovies = async (category) => {
  try {
    const response = await fetch(`${BASE_URL}/${category}?api_key=4911ddd42d2b966c80ec741f553d`);
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};