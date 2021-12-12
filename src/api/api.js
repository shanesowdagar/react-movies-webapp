import axios from 'axios';

const api_key = 'aec12a6ea9cbbaac46cb6b541ba6e03b';

const GetMoviesByPopularity = () => {
	const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

	return axios.get(URL);
};

export { GetMoviesByPopularity };
