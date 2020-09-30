import React from 'react';
import './Card.css';

export default () => {
	return (
		<>
			<div className="container">
				<div className="card">
					<div className="top top-display">
						<div className="content">
							<img src="https://images.unsplash.com/1/type-away.jpg" />
							<h3>Something</h3>
						</div>
					</div>
					<div className="under under-display">
						<div className="content">
							<p>Description about project</p>
							<a href="#">See more...</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
