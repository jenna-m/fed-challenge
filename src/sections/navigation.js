import React from 'react';
import classnames from 'classnames';
import iFitLogo from '../images/svg-logos/ifit-coach-logo.svg';

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			prevScrollPosition: window.pageYOffset,
			visible: true,
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	// method to hide/show navbar on scroll down/up
	handleScroll = () => {
		const currentScrollPosition = window.pageYOffset;
		if (currentScrollPosition > 700) {
			this.setState({
				prevScrollPosition: currentScrollPosition,
				visible: false,
			});
		} else {
			this.setState({
				visible: true,
			});
		}
	};
	render() {
		return (
			<div
				className={classnames('navigation', {
					'navigation--hidden': !this.state.visible,
				})}
			>
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
					<div id="nav-button">
						<button>Sign Up</button>
					</div>
				</nav>
			</div>
		);
	}
}
