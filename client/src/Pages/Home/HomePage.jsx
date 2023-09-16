import React from "react";
import {
	SaleBanner,
	ShopHome,
	PopularDecor,
	AboutUs,
	CardInfo,
	Footer
} from "../../components/";
import sl from "./homePage.module.scss";
import HeroSection from "../../components/HomePage/HeroSection/HeroSection";

const HomePage = () => {
	return (
		<main className={sl.home__container}>
			<HeroSection />
			{/* <SaleBanner />
			<ShopHome />
			<PopularDecor /> */}
			<AboutUs />
			{/* <CardInfo /> */}
		</main>
	);
};

export default HomePage;
