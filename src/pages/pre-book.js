import React from 'react';

import backgroundImage from '../images/pre-book.png';

import Form from '../components/form/form';
import Layout from '../layout/layout';
import SEO from '../components/seo';

const PreBookPage = () => (
	<React.Fragment>
		<img className="backgroundImage" src={backgroundImage} alt="background" />
		<Layout>
			<SEO title="Pre-Book" />
			<h1>Book in Advance</h1>
			<h2 className="mb-30">Grab a seat to our next poker event</h2>
			<p>
				On this page you can book in advance a seat to our event or you can refer a friend for great discounts
				and deals.
			</p>
			<p>
				Fill in the form with the necessary info and a member of our team will contact you as soon as possible.
			</p>
			<p>
				In the subject field please mention what you're opting for, be it booking in advance or referral or
				both.
			</p>
			<p>
				In the message field please mention the stake you'd like to play and a phone number where we can contact
				you for details.
			</p>
			<p>
				If you'd also like to refer a friend, write their info in the message field (E-Mail, Name,Phone No.,
				Stake)
			</p>

			<Form />
		</Layout>
	</React.Fragment>
);

export default PreBookPage;
