import React from 'react';
import './App.scss';

// Import page sections
import Navigation from './sections/navigation';
import Hero from './sections/hero';
import Reviews from './sections/reviews';
import Workouts from './sections/workouts';
import Equipment from './sections/equipment';
import Footer from './sections/footer';

function App() {
	return (
		<div>
			<Navigation />
			<Hero />
			<Reviews />
			<Workouts />
			<Equipment />
			<Footer />
		</div>
	);
}

export default App;
