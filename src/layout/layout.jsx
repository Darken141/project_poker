import React, { useState } from 'react';

import AsideNavbar from '../components/AsideNavbar/asideNavbar';
import Footer from '../components/footer/footer';

import './layout.scss';

const Layout = ({ children }) => {
	const [ showmenu, SetShowMenu ] = useState(false);

	return (
		<div className="background">
			<AsideNavbar showmenu={showmenu} />
			<div
				className="hamburger"
				onClick={() => {
					SetShowMenu(!showmenu);
				}}
			>
				<div className="row" />
				<div className="row" />
				<div className="row" />
			</div>
			<div className="content">
				<main>{children}</main>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
