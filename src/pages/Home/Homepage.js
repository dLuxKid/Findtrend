// REACT
import React from "react";
// CSS
import "./Homepage.css";
// IMAGES
import crypto from "../../assets/images/cryptopunk-search.svg";
import popular from "../../assets/images/popularDesign-search.svg";
import product from "../../assets/images/producrDesign-search.svg";
import elon from "../../assets/images/elon-search.svg";
import whiteArrow from "../../assets/images/white-arrow.svg";
import blackArrow from "../../assets/images/black-arrow.svg";
import findtrend from "../../assets/images/findtrend.svg";

const Homepage = () => {
	return (
		<main>
			<section className='herosection'>
				<div className='herosection_content'>
					<h1>
						Minimize your tabs. <br />
						Find the trends
					</h1>
					<p>
						Don't let your computer memories consumes all of those browser tabs.{" "}
						<br />
						Findtrend let you gathers all of your favorite website into one place.
					</p>
					<div className='herosection_btnContainer'>
						<button>Get Started 🔥</button>
						<div className='btn_cta'>
							<h5>All research start from here</h5>
							<img src={whiteArrow} alt='white arrow' />
						</div>
					</div>
					<div className='herosection_imageContainer'>
						<img src={crypto} alt='crypto' className='rotateup' />
						<img src={popular} alt='popular-design' className='rotatedown' />
						<img src={product} alt='product-design' className='rotateup' />
						<img src={elon} alt='elon-musk' className='rotatedown' />
					</div>
				</div>
			</section>

			<section className='openNewTabsSection'>
				<div className='newtab_container'>
					<div className='title'>
						<h1>Open new tabs is sh*t</h1>
					</div>
					<div className='demo'>
						<div className='blackArrow_left'>
							<img src={blackArrow} alt='white arrow' />
							<h5>solution for discover a friend</h5>
						</div>
						<div className='findtrend_imgContainer'>
							<img src={findtrend} alt='Findtrend' />
						</div>
						<div className='blackArrow_right'>
							<h5>you just need one tab now</h5>
							<img src={blackArrow} alt='white arrow' />
						</div>
					</div>
					<div className='text'>
						<p>
							A solution for your browser tabs and don t make your device get slower
							over time. Get ease and faster to discover a trend with just one tab
						</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Homepage;
