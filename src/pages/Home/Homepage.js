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
import elontwt from "../../assets/images/elon-twitter.svg";
import elontwtBig from "../../assets/images/elon-twitter-big.svg";

// DATA
import { startupImg, platformImg } from "../../components/startupImgs";

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

			<section className='startupSection'>
				<div className='startup_container'>
					<div className='startup_title'>
						<h1>
							Findtrend helps you to increase your productivity and reduce your
							computer's memory load,
							<span style={{ color: "var(--grey2)" }}>
								{" "}
								an application that can fulfill your daily browsing needs.
							</span>
						</h1>
					</div>
					<div className='startup_listContainer'>
						<h1>Findtrend make +1000 Startup grow</h1>
						<div className='startup_list'>
							{startupImg.map((item, index) => (
								<div className='startupImg_container' key={index}>
									<img src={item.imgPath} alt={item.imgPath} />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className='platformSection'>
				<div className='platformContainer'>
					<h1 className='title'>All platform connect to FindTrend</h1>
					<div className='platforms_list'>
						{platformImg.map((item, index) => (
							<div className='platformImg_container' key={index}>
								<img src={item.imgPath} alt={item.imgPath} />
							</div>
						))}
					</div>
					<div className='trends'>
						<img src={elontwt} alt="Elon's tweet" />
						<img src={elontwtBig} alt="Elon's tweet" />
						<img src={elontwt} alt="Elon's tweet" />
					</div>
					<div className='trendsBtn'>
						<button>View More Trends</button>
					</div>
				</div>
			</section>

			<section className='dealsSection'>
				<div className='title'>
					<h1>Get your best deal</h1>
				</div>
				<div className='dealsOption'>
					<p>Monthly</p>
					<div className='ball_container'>
						<div className='ball'></div>
					</div>
					<p>Yearly</p>
					<div className='btn_cta'>
						<h5>All research start from here</h5>
						<img src={whiteArrow} alt='white arrow' />
					</div>
				</div>
				<div></div>
			</section>

			<section className='joinusSection'>
				<div className='joinus title'>
					<h1>Join us on email for</h1>
					<h1>
						<span>more trending topics</span>
					</h1>
					<button>Join Now</button>
				</div>
			</section>
		</main>
	);
};

export default Homepage;
