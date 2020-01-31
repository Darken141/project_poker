import React from 'react';
import { Link } from 'gatsby';

import wecallpoker from '../images/name.png';
import backgroundImage from '../images/home.png';

import Layout from '../layout/layout';
import SEO from '../components/seo';

const IndexPage = () => (
	<React.Fragment>
		<img className="backgroundImage" src={backgroundImage} alt="background" />
		<Layout>
			<SEO title="Home" />
			<h1>Welcome</h1>
			<h2>to</h2>
			<img src={wecallpoker} alt="wecallpoker name" className="centerImage" />
			<h2 className="mb-40">Cash Game Poker Tour</h2>
			<p>
				<strong>WeCallPoker</strong>, home of the biggest cash game tour events.
			</p>
			<p>
				You can check out the <Link to="/about">About Us</Link> page to find out a little bit about our group.
			</p>
			<p>
				In the <Link to="/events">Events</Link> page you can find our current and upcoming events.
			</p>
			<p>
				Visit our <Link to="/promotions">Promotions</Link> page for information about our Event Promotions and
				Event T&Cs.
			</p>
			<p>
				You can book a seat for our next Poker event by going to the <Link to="/pre-book">Pre-Book</Link> page,
				where you can also refer a friend and receive discounts for your referrals at the Event. ​
			</p>
			<p>
				If you need information about our event rules feel free to check out the{' '}
				<Link to="/event-rules">Event Rules</Link> page.
			</p>
			<p>
				Contact us for any information regarding an event through the <Link to="/contact">Contact Us</Link> page
				or by E-Mailing us at <span>cgpt@wecallpoker.com</span>.
			</p>
			<p>Thank you for stopping by and see you at our next event!</p>
			<p className="right">~WeCallPoker Team</p>
		</Layout>
	</React.Fragment>
);

export default IndexPage;
