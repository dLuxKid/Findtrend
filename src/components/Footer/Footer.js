// REACT
import React from "react";
// CSS
import "./Footer.css";
// IMAGES
import logo from "../../assets/images/logodark.svg";

const Footer = () => {
	return (
		<footer>
			<div className='footerContainer'>
				<div className='logoContainer'>
					<img src={logo} alt='Logo' />
				</div>
				<div className='footerNavigation'>
					<ul className='footerNavigationList'>
						<li>Privacy Policy</li>
						<li>Terms and Conditions</li>
						<li>Contact Us</li>
						<li>Careers</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
