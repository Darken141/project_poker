import React from 'react';

import backgroundImage from '../images/home.webp';

import Layout from '../layout/layout';
import SEO from '../components/seo';

const IndexPage = () => (
	<React.Fragment>
		<img className="backgroundImage" src={backgroundImage} alt="background" />
		<Layout>
			<SEO title="Cookies" />
			<h1 className="mb-30">Cookies Policy</h1>

			<h3>What are Website Cookies exactly?</h3>
			<ul className="ml-40">
				<li>Cookies are small files which contain information about browsing activities.</li>
				<li>
					Whenever you access a website, said website sends out a cookie to the device you're using to access
					it (the website) which will be stored on your device until the moment you decide to clear your
					cookie history.
				</li>
				<li>
					That cookie will remember your online persona so to speak and it will ensure that the next time you
					visit the website, everything will work a lot better and a lot faster. Pages will load faster as
					that information is <strong>stored</strong> in the cookie that you received on your first visit,
					personal preferences you might have opted for on your first visit will also be remembered and so on.
				</li>
			</ul>

			<h3>What is the use of Cookies?</h3>
			<p>Cookies have many uses. Here are some of them:</p>
			<ul className="ml-40">
				<li>Storing login information for easier access in the future;</li>
				<li>
					They can be used to display custom ads based on your previous search history in order to further
					improve your browsing experience and help you find what you're searching for faster;
				</li>
				<li>
					They can also be used to improve the overall site performance and User Experience that it delivers;
				</li>
				<li>For analyzing the behavior of site visitors; ​</li>
			</ul>

			<h3>So what does WeCallPoker use site Cookies for?</h3>
			<p>We use site cookies in order to:​​</p>

			<ul className="ml-40">
				<li>Improve the overall site performance and User Experience that it delivers;</li>
				<li>Analyze the behavior of site visitors; ​</li>
			</ul>

			<p>
				This policy is in addition to the WeCallPoker GDPR Policy, which you can find here, and the Terms and
				Conditions of the site that you can find here, which we encourage you to read as they include additional
				useful information, including WCP's responsibility for the protection of personal data, all purposes of
				data processing by WCP, your rights, as well as exceptions and limitations thereof.
			</p>

			<p>
				<strong>
					Proper protection of personal data is an important goal for WeCallPoker. Our desire is to be as
					clear and transparent as possible regarding the WeCallPoker approach in this area. For any
					questions, please contact us at cgpt@wecallpoker.com.
				</strong>
			</p>
		</Layout>
	</React.Fragment>
);

export default IndexPage;
