import React from 'react';
import gearJunkieLogo from '../images/svg-logos/gear-junkie-logo.svg';
import wiredLogo from '../images/svg-logos/wired-logo.svg';
import mashableLogo from '../images/svg-logos/mashable-logo.svg';

function Reviews() {
	return (
		<div id="reviews">
			<div className="review-card">
				<div className="review-source">
					<img src={gearJunkieLogo} alt="Gear Junkie Logo" />
				</div>
				<div className="review-text">
					<p>
						“You focus on putting in the work, and the technology
						handles the rest.”
					</p>
				</div>
			</div>
			<div className="review-card">
				<div className="review-source">
					<img src={wiredLogo} alt="Wired Logo" />
				</div>
				<div className="review-text">
					<p>
						“Literally transports you from home to wherever you
						choose to run.”
					</p>
				</div>
			</div>
			<div className="review-card">
				<div className="review-source">
					<img src={mashableLogo} alt="Mashable Logo" />
				</div>
				<div className="review-text">
					<p>
						“Breathes new life into a tired, old running routine.”
					</p>
				</div>
			</div>
		</div>
	);
}

export default Reviews;
