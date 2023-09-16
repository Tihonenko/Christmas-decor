import React from "react";
import { Link } from "react-router-dom";
import { snow } from "../../../img";

import styles from "../header.module.scss";

const FooterItem = ({ item }) => {
	return (
		<li className={`flex gap-2 ${styles.list_item}`}>
			<Link to={item.link}>{item.title}</Link>
			<span>
				<img className="inline" src={snow} alt="snow" />
			</span>
		</li>
	);
};

export default FooterItem;
