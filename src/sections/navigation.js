import React from 'react';
import iFitLogo from '../images/svg-logos/ifit-coach-logo.svg';

function Navigation() {
	return (
		<div id="navigation">
			<nav id="top-nav">
				<ul id="top-nav-ul">
					<li>Blog</li>
					<li>Nourish</li>
					<li>Shop</li>
				</ul>
			</nav>

			<nav id="sub-nav">
				<div id="logo">
					<img src={iFitLogo} alt="iFit Logo" />
				</div>
				<div id="sub-nav-links">
					<ul id="sub-nav-ul">
						<li>Exercise</li>
						<li>Nutrition</li>
						<li>Activity</li>
						<li>Sleep</li>
					</ul>
				</div>
				<div id="sign-up-button">
					<button>Sign Up</button>
				</div>
			</nav>
		</div>
	);
}

export default Navigation;
