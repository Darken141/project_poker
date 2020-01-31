import React from 'react';
import { Link } from 'gatsby';

import logo from '../../images/logo.png';
import wecallpoker from '../../images/wecallpoker_navbar.png';
import text from '../../images/text.png';

import facebook from '../../images/facebook.webp';
import twitter from '../../images/twitter.webp';
import instagram from '../../images/instagram.webp';
import linkedin from '../../images/linkin.webp';

import './asideNavbar.scss';

const AsideNavbar = ({ showmenu }) => {
	return (
		<aside className={showmenu ? 'navbar open' : 'navbar'}>
			<img src={logo} alt="wecallpoker logo" className="logo" />
			<img src={wecallpoker} alt="wecallpoker name" className="logoName" />
			<img src={text} alt="wecallpoker text" className="logoText" />
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About us</Link>
				</li>
				<li>
					<Link to="/events">Events</Link>
				</li>
				<li>
					<Link to="/promotions">Promotions</Link>
				</li>
				<li>
					<Link to="/pre-book">Pre-Book</Link>
				</li>
				<li>
					<Link to="/event-rules">Event Rules</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
			<div className="iconContainer">
				<a href="https://www.facebook.com/WCPcashgamepokertour/">
					<img src={facebook} alt=" icon" />
				</a>
				<a href="https://twitter.com/wecallpoker">
					<img src={twitter} alt=" icon" />
				</a>
				<a href="https://www.instagram.com/wcpcashgamepokertour/">
					<img src={instagram} alt=" icon" />
				</a>
				<a href="https://www.linkedin.com/in/wecallpoker-wcp-269260193/">
					<img src={linkedin} alt=" icon" />
				</a>
			</div>
		</aside>
	);
};

export default AsideNavbar;
