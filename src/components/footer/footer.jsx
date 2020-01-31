import React from 'react';
import { Link } from 'gatsby';

import gamblingTherapyHand from '../../images/gambling_therapy_hand.webp';
import knowYourLimits from '../../images/know_your_limits.webp';

import './footer.scss';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__row">
				<div className="footer__column links">
					<span>Site Information</span>
					<Link to="/website-t-c">Site T&Cs</Link>
					<Link to="/cookies">Site Cookies</Link>
					<Link to="/gdpr">GDPR</Link>
				</div>
				<div className="footer__column">
					<a href="https://www.begambleaware.org/">Be Gamble Aware</a>
					<div className="icons">
						<span>18+</span>
						<img src={gamblingTherapyHand} alt="gambling therapy hand" />
						<img src={knowYourLimits} alt="know your limits" />
					</div>
				</div>
				<div className="footer__column">
					<p>Contact:</p>
					<p>Phone: +447404063923</p>
					<p>E-Mail: cgpt@wecallpoker.com</p>
				</div>
			</div>
			<p>18+ Terms & Conditions apply, Play Responsibly.©2019 WeCallPoker. All rights reserved.</p>
		</footer>
	);
};

export default Footer;
