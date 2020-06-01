import React from 'react';
// Import workout data
import workoutData from '../data/workoutData';
// Import icons
import playlistIcon from '../images/icons/playlistIcon.svg';
import timeIcon from '../images/icons/timeIcon.png';
import distanceIcon from '../images/icons/distanceIcon.png';

function Workouts() {
	// Map workout data
	const workouts = workoutData.map((workout) => {
		// conditionally render playlist info
		const showPlaylist = () => {
			if (workout.isPlaylist) {
				return (
					<div className="workout-playlist-overlay">
						<span className="workout-quantity">
							{workout.quantity}
						</span>
						<br />
						<span>Workouts</span>{' '}
						<img src={playlistIcon} alt="Playlist Icon" />
					</div>
				);
			} else {
				return null;
			}
		};
		// conditionally render time & distance for nonplaylist workouts
		const renderStats = () => {
			if (workout.isPlaylist) {
				return null;
			} else {
				return (
					<div className="workout-stats">
						<ul>
							<li>
								<img
									src={timeIcon}
									alt="Icon representing a stopwatch"
								/>
								<span>{workout.time}</span>
							</li>
							<li>
								<img
									src={distanceIcon}
									alt="Icon representing distance"
								/>
								<span>{workout.distance}</span>
							</li>
						</ul>
					</div>
				);
			}
		};
		// return mapped workout
		return (
			<div className="workout-card">
				<div className="workout-image">
					<img src={workout.src} alt={workout.title} />
					{showPlaylist()}
				</div>
				<div className="workout-info">
					<div className="workout-text">
						<div className="workout-title">
							<span>{workout.title}</span>
						</div>
						{renderStats()}
						{/* show on hover */}
						<div className="view-details-toggle">
							<span>View Details</span>
						</div>
					</div>
					<div className="trainer-info">
						<img src={workout.avatar} alt={workout.trainerName} />
					</div>
				</div>
			</div>
		);
	});
	return <div id="workouts-container">{workouts}</div>;
}

export default Workouts;
