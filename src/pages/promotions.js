import React from 'react';

import backgroundImage from '../images/promotions.webp';

import TableList from '../components/tableList/tableList';
import Layout from '../layout/layout';
import SEO from '../components/seo';

const PromotionsPage = () => (
	<React.Fragment>
		<img className="backgroundImage" src={backgroundImage} alt="background" />
		<Layout>
			<SEO title="Promotions" />
			<h1 className="mb-30">Cash Game Poker Tour Promotions</h1>
			<p className="mb-60 center">
				Throughout Cash Game Poker Tour, players are invited to be part of two very exciting promotions
				WeCallPoker has designed for them:
			</p>
			<div className="row">
				<div className="column">
					<h4>“Hot Seat”</h4>
					<p>
						The first “Hot Seat” draw will take place at 5pm, using a random seat generator. Another two
						lucky players will be the winners for 6pm and 7pm. From 9pm the draw will take place every two
						hours until 3am. The winner will be announced by the Cash Game Supervisor (CGS). In order to
						participate a player must be in play 20 minutes prior to the draw. For more information about
						the announcement times and prizes, please see the table below. ​
					</p>
					<span>All players included. T&C’s apply, see T&C’s.</span>
				</div>
				<div className="column">
					<h4>“Golden Hand”</h4>
					<p>
						In order to participate, a player must build the highest hand before 8pm. If your hand remains
						the highest until announcing time, you will be declared the winner for that hour . From there on
						every two hours, until 4 am, will bring you the chance to build the highest hand, and be
						rewarded with the “Golden Hand” prize, of the specified hour. Please check the table below for
						more information about announcement times and prizes. ​
					</p>
					<span>NHL players only. T&C’s apply, see T&C’s.</span>
				</div>
			</div>

			<p className="center">The prizes will be distributed as follows:</p>

			<TableList />
		</Layout>
	</React.Fragment>
);

export default PromotionsPage;
