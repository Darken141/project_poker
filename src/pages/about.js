import React from 'react';

import wecallpoker from '../images/Name.webp';
import backgroundImage from '../images/cards.webp';

import Layout from '../layout/layout';
import SEO from '../components/seo';

const AboutPage = () => (
	<React.Fragment>
		<img className="backgroundImage" src={backgroundImage} alt="background" />
		<Layout>
			<SEO title="About us" />
			<h1>About</h1>
			<img src={wecallpoker} alt="wecallpoker name" className="centerImage mb-40" />
			<p>
				Over time the poker industry has grown so big and so fast, making its way not only in poker rooms, but
				also in casinos and in the online environment.
			</p>
			<p>
				​ Poker tournaments are on fire, how can they not be with great structures, low buy-ins and for some of
				them, huge GTEs. ​
			</p>
			<p>No wonder the interest in poker games is on the rise.</p>
			<p>
				But, before poker tournaments, tournament players, golden rings, golden bracelets or any of these, there
				was the cash game player, now a little forgotten.{' '}
			</p>
			<p>
				​ We decided to change that, and make it our mission to bring him back into the center of the action,
				organizing events tailored to his desire.​
			</p>
			<p>
				{' '}
				Two people plus over 20 years of experience in the casino industry equals Cash Game Poker Tour events.
			</p>
			<p>And this is how WeCallPoker was born.</p>
			<p>We are more than happy to welcome you on to our journey.</p>
		</Layout>
	</React.Fragment>
);

export default AboutPage;
