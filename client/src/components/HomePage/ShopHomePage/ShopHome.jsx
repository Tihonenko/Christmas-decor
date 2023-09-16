import React from "react";
import { Link } from "react-router-dom";
import { dataShopHome } from "../../../constans";
import sl from "./shophome.module.scss";

const ShopHome = () => {
	return (
		<section className="container flex flex-1  gap-8 mt-10 sm:justify-between smd:flex-wrap smd:gap-4">
			{dataShopHome.map((obj, idx) => (
				<Link
					to={obj.link}
					key={`shop item ${idx}`}
					className="text-center flex flex-col justify-center basis-full sm:basis-full smd:basis-full"
				>
					<img
						src={obj.img}
						alt={obj.title}
						className="cursor-pointer hover:brightness-95 "
					/>
					<h3 className={`${sl.shop__text} a-hover inline`}>{obj.title}</h3>
				</Link>
			))}
		</section>
	);
};

export default ShopHome;
