import React from 'react';
// Import reviews data
import reviewsData from '../data/reviewsData';
// Import left and right arrow icons
import leftArrow from '../images/icons/arrowLeft.png';
import rightArrow from '../images/icons/arrowRight.png';

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
	return (
		<div id="reviews-container">
			<div id="reviews-controls">
				<div id="left-control">
					<img src={leftArrow} alt="Left arrow" />
				</div>
				<div id="right-control">
					<img src={rightArrow} alt="Right arrow" />
				</div>
			</div>
			{reviews}
		</div>
	);
}

export default Reviews;
