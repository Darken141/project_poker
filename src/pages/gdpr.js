import React from 'react';

import backgroundImage from '../images/home.webp';

import Layout from '../layout/layout';
import SEO from '../components/seo';

const IndexPage = () => (
	<React.Fragment>
		<img className="backgroundImage" src={backgroundImage} alt="background" />
		<Layout>
			<SEO title="DGPR" />
			<h1 className="mb-30">GDPR Policy</h1>
			<p>
				<strong>
					WeCallPoker (further addressed as WCP) is committed to protecting and respecting your privacy in
					accordance with Articles 13,14 and 26 of Regulation (EU) 2016/679 on the protection of individuals
					with regard to the processing of personal data (GDPR). This Policy describes what personal
					information we collect from you and how we process it. This Policy governs the collection, storage,
					processing and transfer of Personal Data, the purpose of collection and transmission to third
					parties.
				</strong>
			</p>
			<ol className="ml-40">
				<li>
					The purpose of the processing of personal data is required in order to provide you with the best
					experience while you're browsing the website and when you're requesting to book a seat in advance or
					refer a friend. Your data is obtained by sending us an e-mail through our e-mail address, or by
					submitting an inquiry through the website's Contact page, by booking a seat in advance or even
					contacting us directly on the phone or at events through the exchange of business cards, or through
					external sites and social networks.
				</li>
				<li>
					Your data will be processed exclusively in the case of a voluntary request or in the response to an
					advertisement and exclusively for the purpose of informing you regarding an event or an inquiry
					related to WCP that you might have.
				</li>
				<li>
					We will collect all the information you provide to us when you contact us, such as first name, last
					name, date of birth, address, e-mail address, telephone number and any other information that you
					decide to include in the methods through which you contact us(e-mail, phone call, business card
					exchange, event registration and so on)
				</li>
				<li>
					Your data will only be processed with your consent and WCP assumes its deletion when you decide that
					you no longer want your data to be available to WCP and notify WCP accordingly.
				</li>
				<li>
					The storage period for Personally Identifiable Information (PII) is 24 months, with the exception of
					what is mentioned in paragraph 4. otherwise all data will be automatically deleted from storage
					after 24 months.
				</li>
				<li>
					Data processing is based on the principles of fairness, transparency and legitimacy. These will be
					processed manually or by automated methods. Their transmission will take place by appropriate
					technical methods and only to authorized persons from third parties.
				</li>
				<li>
					As mentioned in paragraph 6, your data will only be processed by third party employees, persons
					authorized to do so, solely for the purpose of providing you with information regarding any relevant
					information about current and past events. Personal data will not be disclosed.
				</li>
				<li>
					Pursuant to Articles 15-22 of the GDPR you have the right to request access to your data, to request
					its modification or deletion, to request the correction of inaccurate data, to add incomplete data
					and to request the restriction of data transfers. You also have the right to withdraw your consent
					at any time.
				</li>
			</ol>
		</Layout>
	</React.Fragment>
);

export default IndexPage;
