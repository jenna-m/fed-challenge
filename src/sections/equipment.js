import React from 'react';
// Import equipment data
import equipmentData from '../data/equipmentData';

function Equipment() {
	// map all equipment data
	const equipment = equipmentData.map((equipment) => {
		return (
			<div className="equipment-card">
				<div className="equipment-image">
					<img src={equipment.src} alt={equipment.alt} />
				</div>
				<div className="equipment-text">
					<p>{equipment.title}</p>
				</div>
			</div>
		);
	});
	return (
		<div id="equipment-container">
			<h3>Interested in our exciting iFit-enabled equipment?</h3>
			<div id="equipment-cards-container">{equipment}</div>
		</div>
	);
}

export default Equipment;
