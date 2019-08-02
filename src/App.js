import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
const App = () => {
	return (
		// <HomePage /> //gh-pages github deployment issue with react-router
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
};

export default App;
