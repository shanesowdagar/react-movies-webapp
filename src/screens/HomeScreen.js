import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetMoviesByPopularity } from '../api/api';
import Loader from '../components/Loader';
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
	overflow: hidden;
	margin-bottom: 2em;

	@media (max-width: 576px) {
		justify-content: center;
	}
`;

const LoadingContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LoadMoreSection = styled.div`
	/* border: 2px solid rebeccapurple; */
	display: flex;
	justify-content: center;
	margin-bottom: 2em;
	/* overflow: hidden; */
`;

const LoadMoreButton = styled.button`
	font-weight: bold;
	text-transform: uppercase;
	padding: 15px 40px;
	display: inline-block;
	border: none;
	font-family: 'Roboto';
	background-color: #fff;
	color: #000;
	border-radius: 100px;
	transition: all 0.2s;
	cursor: pointer;
	&:hover,
	&:active {
		transform: translateY(-5px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}
	&:active {
		transform: translateY(-1px);
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
	}
`;
// const LoadMoreButton = styled.button`
// 	font-size: 1.5rem;
// 	font-family: 'Roboto';
// 	padding: 0.5em 0.7em;
// 	border: none;
// 	border-radius: 7px;
// 	cursor: pointer;
// `;

const HomeScreen = () => {
	useEffect(() => {
		GetMoviesByPopularity()
			.then((response) => {
				if (response.status !== 200) throw new Error(response.statusText);

				const { data: result } = response;
				console.log(result);
				setMovies(result.results);
				setPages({
					...pages,
					total_pages: result.total_pages,
					current_page: result.page,
				});
				setLoading(false);
			})
			.catch((e) => console.log(e));
	}, []);

	const getMoreMovies = () => {
		GetMoviesByPopularity(pages.current_page + 1)
			.then((response) => {
				if (response.status !== 200) throw new Error(response.statusText);

				const { data: result } = response;
				// console.log(result);
				setMovies([...movies, ...result.results]);
				setPages({
					...pages,
					total_pages: result.total_pages,
					current_page: result.page,
				});
				setLoading(false);
			})
			.catch((e) => console.log(e));
	};

	const [movies, setMovies] = useState([]);
	const [pages, setPages] = useState({
		total_pages: 0,
		current_page: 0,
	});
	const [loading, setLoading] = useState(true);

	return (
		<Container>
			<Title>Movies App</Title>

			{loading ? (
				<LoadingContainer>
					<Loader />
				</LoadingContainer>
			) : (
				<MoviesList>
					{movies.map((movie, index) => (
						<MovieCard key={index} movie={movie} />
					))}
				</MoviesList>
			)}

			{pages.current_page < pages.total_pages && (
				<LoadMoreSection>
					<LoadMoreButton onClick={() => getMoreMovies()}>
						Load more
					</LoadMoreButton>
				</LoadMoreSection>
			)}
		</Container>
	);
};

export default HomeScreen;
