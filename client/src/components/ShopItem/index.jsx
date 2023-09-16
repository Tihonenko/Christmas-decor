import React from "react";
import { Link } from "react-router-dom";

import styles from "./shopItem.module.scss";

const ShopItem = ({ item }) => {
	return (
		<>
			<div className={styles.shop_item}>
				<div className="mb-2 w-full ">
					<img
						src={`${process.env.REACT_APP_API_URL}/${item.img}`}
						alt={item.title}
						className="h-[400px] w-full object-fill"
					/>
				</div>
				<div className={styles.shop_item_description}>
					<Link to={item._id} className={styles.shop_item_link}>
						{item.title}
					</Link>
					<span>{item.price}</span>
				</div>
			</div>
		</>
	);
};

export default ShopItem;
