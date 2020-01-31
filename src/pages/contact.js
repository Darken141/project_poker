import React from 'react';

import backgroundImage from '../images/contact.png';

import Form from '../components/form/form';
import Layout from '../layout/layout';
import SEO from '../components/seo';

const ContactPage = () => (
	<React.Fragment>
		<img className="backgroundImage" src={backgroundImage} alt="background" />
		<Layout>
			<SEO title="Contact" />
			<h1 className="mb-30">Get in Touch</h1>
			<Form />
		</Layout>
	</React.Fragment>
);

export default ContactPage;
