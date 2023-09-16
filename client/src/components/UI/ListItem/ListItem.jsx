import React from "react";
import { Link } from "react-router-dom";
import { snow } from "../../../img";

import styles from "./listItem.module.scss";

const ListItem = ({ item, className }) => {
	return (
		<li className={`flex gap-2 ${className} ${styles.list_item}`}>
			<Link to={item.link}>{item.title}</Link>
			<span>
				<img className="inline" src={snow} alt="snow" />
			</span>
		</li>
	);
};

export default ListItem;
