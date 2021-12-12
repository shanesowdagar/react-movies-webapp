// import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	min-width: 15rem;
	flex: 1;
	max-width: 20rem;
	margin: 0 0.5em 0.5em 1em;
	transition: transform 0.2s;

	/* &:hover,
	&:active,
	&:focus {
		transform: scale(10px);
	} */

	&:hover {
		cursor: pointer;
		transform: scale(1.07);
	}
`;

const PosterImage = styled.img`
	width: 100%;
	display: inline-block;
`;

// const InfoOverlay = styled.div`
// 	background: white;
// 	width: 100%;
// 	height: 100%;
// 	opacity: 0.5;
// 	position: absolute;
// 	transition: transform 0.5;
// 	transform: translateY(100%);
// 	/* display: none; */
// 	display: ${(props) => {
// 		console.log(props);
// 		return props.showOverlay ? 'block' : 'none';
// 	}};
// `;

const MovieCard = ({ movie }) => {
	const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';

	return (
		<Container>
			{/* <InfoOverlay /> */}
			<PosterImage src={imageBaseUrl + movie.poster_path} alt={movie.title} />
		</Container>
	);
};

export default MovieCard;
