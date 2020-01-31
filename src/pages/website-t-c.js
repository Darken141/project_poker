import React from 'react';

import backgroundImage from '../images/home.webp';

import Layout from '../layout/layout';
import SEO from '../components/seo';

const IndexPage = () => (
	<React.Fragment>
		<img className="backgroundImage" src={backgroundImage} alt="background" />
		<Layout>
			<SEO title="Website T&C" />
			<h1 className="mb-30">Website T&Cs</h1>

			<h3 className="mb-30">LEGAL NOTICE - TERMS OF WEBSITE USE</h3>
			<p>
				This page (together with the documents referred to on it) tells you the terms of use on which you may
				make use of our website www.wecallpoker.com (our site), whether as a guest or a registered user. Please
				read these terms of use carefully before you start to use the site. By using our site, you indicate that
				you accept these terms of use and that you agree to abide by them. If you do not agree to these terms of
				use, please refrain from using our site.
			</p>
			<div style={{ height: '3rem' }} />
			<h3 className="mb-30">SITE CONTENT</h3>
			<p>
				The materials made available in this site, including materials in linked sites directly or indirectly
				accessible from this site, are provided "as is" without warranties of any kind, either express or
				implied, including but not limited to all implied warranties of merchantability, fitness for a
				particular purpose, title, or non-infringement. We do not warrant that the materials will be error free,
				nor free of viruses, defamatory, offensive, or other harmful matter. You assume the entire cost of any
				necessary service, repair, or correction. This site may also include publications with technical
				inaccuracies or typographical errors that will be corrected as they are discovered by us at our sole
				discretion. In addition, from time to time changes are made to the information contained in the printed
				versions of such publications. These corrections and changes may be incorporated into this site at an
				earlier or later date.
			</p>
			<div style={{ height: '3rem' }} />
			<h3 className="mb-30">SITE LINKS</h3>
			<p>
				The materials that can be accessed from linked sites are not maintained by us and we are not responsible
				for the contents thereof. Any reference to a linked site or any specific third party product or service
				by name does not constitute or imply its endorsement by us, and you assume all risk with respect to its
				use.
			</p>
			<div style={{ height: '3rem' }} />
			<h3 className="mb-30">LIABILITY</h3>
			<p>
				Under no circumstances shall we, nor our affiliates, staff, agents or suppliers, be liable for any
				damages, including without limitation, direct, indirect, incidental, special, punitive, consequential,
				or other damages (including without limitation lost profits, lost revenues, or similar economic loss),
				whether in contract, tort, or otherwise, arising out of the use or inability to use the materials
				available in this site or any linked site, even if we are advised of the possibility thereof, nor for
				any claim by a third party.
			</p>
			<div style={{ height: '3rem' }} />
			<h3 className="mb-30">PERSONAL USE</h3>
			<p>
				You agree to use this site for lawful purposes only. We are the owner or the licensee of all
				intellectual property rights in our site, and in the material published on it. Those works are protected
				by copyright laws and treaties around the world. All such rights are reserved. You may print off one
				copy, and may download extracts, of any page(s) from our site for your personal reference and you may
				draw the attention of others within your organization to material posted on our site. You may not use
				any part of the materials on our site for commercial purposes without obtaining a license to do so from
				us or our licensors. You shall not copy, use, modify, transmit, distribute, reverse engineer, or in any
				way exploit copyrighted or proprietary materials available in this site, except as expressly permitted
				by the respective owner(s) thereof. Use of any software available for downloading from the site is
				governed by the terms of the applicable license agreement accompanying or included with the software.
				All trademarks, service marks, and trade names in this site are the marks of the respective owner(s),
				and any unauthorized use thereof is strictly prohibited.
			</p>
			<div style={{ height: '3rem' }} />
			<h3 className="mb-30">PERSONAL DATA PROTECTION</h3>
			<p>
				We process information about you in accordance with our privacy policy and terms & conditions. By using
				our site, you consent to such processing and you warrant that all data provided by you is accurate.
			</p>
		</Layout>
	</React.Fragment>
);

export default IndexPage;
