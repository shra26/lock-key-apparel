import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/homepage.component';

const HatsPage = () => (
	<div>
		<h1>Hats Page</h1>
	</div>
);

const App = () => {
	return (
		// <HomePage /> //gh-pages github deployment issue with react-router
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/hats" component={HatsPage} />
			</Switch>
		</div>
	);
};

export default App;
