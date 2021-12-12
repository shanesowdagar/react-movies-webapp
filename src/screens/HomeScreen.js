import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetMoviesByPopularity } from '../api/api';
import MovieCard from '../components/MovieCard';

const Container = styled.div`
	color: #fff;
	/* border: 2px solid blue; */
	max-width: 1280px;
	margin: 0 auto;
`;

const Title = styled.h1`
	/* border: 2px solid red; */
	text-align: center;
	font-size: 2.2rem;
`;

const MoviesList = styled.div`
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 576px) {
		justify-content: center;
	}
`;

const HomeScreen = () => {
	useEffect(() => {
		GetMoviesByPopularity()
			.then((response) => {
				if (response.status !== 200) throw new Error(response.statusText);

				const { data: result } = response;
				setMovies(result.results);
			})
			.catch((e) => console.log(e));
	}, []);

	const [movies, setMovies] = useState([]);

	return (
		<Container>
			<Title>Movies App</Title>

			<MoviesList>
				{movies.map((movie, index) => (
					<MovieCard key={index} movie={movie} />
				))}
			</MoviesList>
		</Container>
	);
};

export default HomeScreen;
