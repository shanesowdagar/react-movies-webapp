/* 
Movie Discovery

Docs : https://developers.themoviedb.org/3/discover/movie-discover 
*/

const GetMoviesByPopularityURL = (api_key) => {
	const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

	return URL;
};

export { GetMoviesByPopularity };
