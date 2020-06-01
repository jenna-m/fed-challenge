import React from 'react';
// Import reviews data
import reviewsData from '../data/reviewsData';

function Reviews() {
	// map all review data
	const reviews = reviewsData.map((review) => {
		return (
			<div className="review-card">
				<div className="review-source">
					<img src={review.logoSRC} alt={review.alt} />
				</div>
				<div className="review-text">
					<p>“{review.content}”</p>
				</div>
			</div>
		);
	});
	return <div id="reviews-container">{reviews}</div>;
}

export default Reviews;
