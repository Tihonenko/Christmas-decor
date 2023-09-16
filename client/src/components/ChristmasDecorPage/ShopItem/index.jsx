import React from "react";
import { Link } from "react-router-dom";
import { dataChristmasShop } from "../../constans";

const ShopItem = () => {
	return (
		<div>
			<div className="mt-7 flex gap-12 flex-grow basis-4/5 ">
				{dataChristmasShop.map((obj, idx) => (
					<div className="min-w-[244px] " key={idx}>
						<div className="mb-2">
							<img
								src={obj.img}
								alt={obj.title}
								className="h-[343px] object-cover"
							/>
						</div>
						<div className="flex flex-col gap-1 items-center pb-2">
							<Link
								to={obj.link}
								className="a-hover text-center font-medium text-base leading-7">
								{obj.title}
							</Link>
							<span>{obj.price}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ShopItem;
