import React from 'react';

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
			<div id="footer-social">Social Media Links</div>
			<div id="footer-legal">Footer Legal Info</div>
		</div>
	);
}

export default Footer;
