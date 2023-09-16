import React, { useState } from "react";
import { motion } from "framer-motion";
import { dataNav } from "../../../constans";
import { ListItem } from "../../UI";
import { close } from "../../../img";
import { btnVariants, listVariants } from "./Variants";

import styles from "../footer.module.scss";

const ShopList = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setIsOpen(prev => !prev)}
				className={styles.main_col_btn}
			>
				<div className="text-base smd:text-lg md:text-[58px]">Shop</div>
				<motion.img
					initial="hidden"
					variants={btnVariants}
					animate={isOpen ? "open" : "close"}
					src={close}
					alt=""
				/>
			</button>
			<motion.div
				initial="hidden"
				variants={listVariants}
				animate={isOpen ? "open" : "close"}
				className="overflow-hidden"
			>
				<ul className={styles.main_col_list}>
					{dataNav.map((obj, idx) => (
						<ListItem item={obj} key={idx} className="text-base" />
					))}
				</ul>
			</motion.div>
		</>
	);
};

export default ShopList;
