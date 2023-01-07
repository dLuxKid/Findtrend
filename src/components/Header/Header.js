// REACT
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
// CSS
import "./Header.css";
//IMAGES
import logo from "../../assets/images/logocolor.svg";
import logoicon from "../../assets/images/logoicon.svg";
// ICONS
import { Icon } from "@iconify/react";

const Header = () => {
	const navItems = [
		{ name: "About", to: "/about" },
		{ name: "How it work", to: "/howItWork" },
		{ name: "Pricing", to: "/pricing" },
		{ name: "Solution", to: "/solution" },
		{ name: "Features", to: "/features" },
	];

	const menuRef = useRef("");

	const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

	return (
		<header>
			<div className='logoContainer'>
				<NavLink to='/'>
					<img src={logoicon} alt='logo' className='logoicon' />
					<img src={logo} alt='Logo' className='logo' />
				</NavLink>
			</div>
			<div className='navigation' ref={menuRef} onClick={toggleMenu}>
				<div className='navMenu'>
					{navItems.map((item, id) => (
						<NavLink to={item.to} key={id} className='navItem'>
							{item.name}
						</NavLink>
					))}
					<div className='authBtnsContainer'>
						<NavLink className='loginBtn'>Login</NavLink>
						<NavLink className='signupBtn'>Register</NavLink>
					</div>
				</div>
			</div>
			<div className='navBtn' onClick={toggleMenu}>
				<Icon
					icon='material-symbols:bar-chart-rounded'
					rotate={1}
					vFlip={true}
					color='white'
					width='32'
				/>
			</div>
		</header>
	);
};

export default Header;
