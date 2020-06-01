import React from 'react';

// Import social media icons
import youtube from '../images/socialMedia/youtube.png';
import pinterest from '../images/socialMedia/pinterest.png';
import facebook from '../images/socialMedia/facebook.png';
import twitter from '../images/socialMedia/twitter.png';
import instagram from '../images/socialMedia/instagram.png';

function Footer() {
	return (
		<div id="footer-container">
			<div id="footer-menu">
				<div className="footer-submenu">
					<ul aria-label="Company">
						<li>About</li>
						<li>Contact Us</li>
						<li>Careers</li>
					</ul>
				</div>
				<div className="footer-submenu">
					<ul aria-label="Account">
						<li>Log In</li>
						<li>Create Account</li>
					</ul>
				</div>
				<div className="footer-submenu">
					<ul aria-label="Support">
						<li>Help Center</li>
						<li>Accessibility</li>
					</ul>
				</div>
			</div>
			<div id="footer-social">
				<ul>
					<li>
						<img src={youtube} alt="YouTube" />
					</li>
					<li>
						<img src={pinterest} alt="Pinterest" />
					</li>
					<li>
						<img src={facebook} alt="Facebook" />
					</li>
					<li>
						<img src={twitter} alt="Twitter" />
					</li>
					<li>
						<img src={instagram} alt="Instagram" />
					</li>
				</ul>
			</div>
			<div id="footer-bottom">
				<div id="footer-language">English</div>
				<div id="footer-legal">
					<ul>
						<li>© iFit.com. All Rights Reserved.</li>
						<li className="legal">Privacy Policy</li>
						<li className="legal">Terms of Use</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
