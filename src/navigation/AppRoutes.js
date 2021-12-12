import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import HomeScreen from '../screens/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigate to='/discover' replace={true} />} />
				<Route path='/discover' element={<HomeScreen />} />
				<Route path='/discover/:movieId' element={<MovieDetailsScreen />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
