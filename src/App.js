import React from 'react';
import './scss/normalize.scss';
import Navigator from './components/Navigator/page';
import Main from './components/Main/page';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Router>
				<Navigator />
				<Route
					path={`/:categoryName?`}
					component={Main}
				/>
			</Router>
		</>
	);
}

export default App;
