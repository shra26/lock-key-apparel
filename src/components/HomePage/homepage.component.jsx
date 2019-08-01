import React from 'react';
import './homepage.styles.scss';
const mapper = ['HATS', 'JACKETS', 'SNEAKERS', 'WOMEN', 'MEN'];
const HomePage = () => (
	<div classname="homepage">
		<div className="directory-menu">
			{mapper.map(mapped => (
				<div className="menu-item">
					<div className="content">
						<h1 className="title">{mapped}</h1>
						<span className="subtitle"> SHOP NOW</span>
					</div>
				</div>
			))}
		</div>
	</div>
);

export default HomePage;
