import React from "react";
import "./PlanOption.css";

const PlanOption = ({ plan }) => {
	return (
		<div className='plansContainer'>
			<div className='planCard' style={{ background: "var(--offwhite)" }}>
				<div className='planContents'>
					<div className='content_header'>
						<h2>Personal</h2>
						<p>Special firstpacket for all</p>
					</div>
					<div className='content_features'>
						<h1>
							${plan ? 96 : 8} <span>/Month</span>
						</h1>
						<ul>
							<li>Up to 5 page each group</li>
							<li>Up to 10 group page</li>
							<li>5 Days group page saved</li>
						</ul>
					</div>
					<div className='plan_button'>
						<button style={{ background: "var(--primary-color" }}>
							Start Free Trial
						</button>
					</div>
				</div>
			</div>

			<div className='planCard' style={{ background: "var(--green2)" }}>
				<div className='planContents'>
					<div className='content_header'>
						<h2>Regular</h2>
						<p>Recommended for personal pro</p>
					</div>
					<div className='content_features'>
						<h1>
							${plan ? 220 : 20} <span>/Month</span>
						</h1>
						<ul>
							<li>Up to 15 page each group</li>
							<li>Download page up to 20 page</li>
							<li>Up to 10 group page</li>
							<li>15 Days group page saved</li>
						</ul>
					</div>
					<div className='plan_button'>
						<button style={{ background: "var(--black", color: "var(--offwhite)" }}>
							Start Free Trial
						</button>
					</div>
				</div>
			</div>

			<div className='planCard' style={{ background: "var(--offwhite)" }}>
				<div className='planContents'>
					<div className='content_header'>
						<h2>Premium</h2>
						<p>Packet for Start & Company</p>
					</div>
					<div className='content_features'>
						<h1>
							${plan ? 480 : 48} <span>/Month</span>
						</h1>
						<ul>
							<li>Unlimited group pages</li>
							<li>Unlimited download page</li>
							<li>Unlimited page each group</li>
							<li>Customize sorting group pages</li>
							<li>Customize group page name</li>
							<li>30 Days group page saved</li>
						</ul>
					</div>
					<div className='plan_button'>
						<button style={{ background: "var(--primary-color" }}>
							Start Free Trial
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlanOption;
