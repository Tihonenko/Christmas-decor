import React from "react";
import { dataCard } from "../../../constans/";
import sl from "./cardInfo.module.scss";

const CardInfo = () => {
	return (
		<section className="container flex gap-5 mb-20 md:flex-wrap ">
			{dataCard.map((obj, idx) => (
				<div className={sl.card__container} key={idx}>
					<img src={obj.img} alt={obj.title} />
					<span>{obj.title}</span>
					<p>{obj.body}</p>
				</div>
			))}
		</section>
	);
};

export default CardInfo;
