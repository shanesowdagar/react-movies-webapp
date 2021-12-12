import { createGlobalStyle } from 'styled-components';
import AppRoutes from './navigation/AppRoutes';
import HomeScreen from './screens/HomeScreen';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
    
  body {
    margin: 0;
    padding: 0;
    font-family:'Roboto', sans-serif;
    background:#1f1f1f;
  }
`;

function App() {
	return (
		<div>
			<GlobalStyles />
			<AppRoutes />
			{/* <HomeScreen /> */}
		</div>
	);
}

export default App;
