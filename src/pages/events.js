import React from 'react';

import logo from '../images/logo_events.png';
import wecallpoker from '../images/wecallpoker_events.png';
import nottingham from '../images/nottingham.png';
import dtd from '../images/dtd.png';
import backgroundImage from '../images/events.png';

import Layout from '../layout/layout';
import SEO from '../components/seo';

const IndexPage = () => (
	<React.Fragment>
		<img className="backgroundImage" src={backgroundImage} alt="background" />
		<Layout>
			<SEO title="Events" />
			<img src={logo} alt="wecallpoker logo" className="centerImage" />
			<img src={wecallpoker} alt="wecallpoker text" className="centerImage" />
			<h2>Presents</h2>
			<h1>Cash Game Poker Tour</h1>
			<h2>IN:</h2>
			<img src={nottingham} alt="nottingham text" className="centerImage" />
			<h2>AT:</h2>
			<img src={dtd} alt="dusktilldawn logo" className="centerImage" />
			<h3 className="mb-30 center">06th of February - 09th of February 2020</h3>
			<h3 className="mb-30 center">
				Four days and over £10,000 GTE in hourly prizes! This is the story of Cash Game Poker Tour
			</h3>
			<h4 className="center mb-05">What is Cash Game Poker Tour about?</h4>
			<p>
				Cash Game Poker Tour is a four days event where all poker players, either new in the game or
				professional, are welcomed with a variety of games, (NLH, PLO, DC) and stakes designed to fit all
				pockets.
			</p>
			<h4 className="center mb-05">When and where?</h4>
			<p>
				The event will start at 4pm on Thursday the 6th of February, at "The Home Of UK Poker" Dusk Till Dawn in
				Nottingham, England. As you already might know, Dusk Till Dawn comes with 45 tables capable to seat
				approx. 350 players, parking spaces, a bar area, and a fully equipped kitchen, that can satisfy
				everyone’s needs. Cash Game Poker Tour will end it's first edition, on Sunday the 9th of February at
				4:00 AM, when the last winner of the Golden Hand Promotion will be announced.
			</p>

			<h4 className="center mb-05">What to expect?</h4>
			<p>
				For the first three hours (5pm, 6pm, 7pm) a random seat generator will pick winners for the “Hot Seat”
				promotion. Meanwhile, make sure you build the highest hand before 8pm and you can be the winner of the
				“Golden Hand” promotion. From there on, every hour will bring a winner of either “Hot Seat” or “Golden
				Hand” prizes.{' '}
			</p>
			<p>
				Furthermore players will benefit from a complimentary buffet between 1am & 3am each day of the festival.
			</p>
			<p>
				Over the weekend the promotions and action will snowball with higher promotional prizes too! Please
				check the Promotion page on our website for more information.
			</p>
			<p>So make sure you don’t miss out!</p>
			<p className="center">T&C’s apply, see T&C.</p>
			<p className="center">Looking forward to seeing you at the table. ​</p>
			<div className="quote">
				<p className="center">
					​ ​ “May the flop be with you!”<span> Doyle Brunson</span>{' '}
				</p>
			</div>
		</Layout>
	</React.Fragment>
);

export default IndexPage;
