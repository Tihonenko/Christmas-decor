import React, { useState } from "react";
import { motion } from "framer-motion";
import { Contact } from "../../../constans";
import { close } from "../../../img";
import { ListItem } from "../../UI";
import { btnVariants, listVariants } from "./Variants";

import styles from "../footer.module.scss";

const SocialList = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setIsOpen(prev => !prev)}
				className={styles.main_col_btn}
			>
				<div className="text-base smd:text-lg md:text-[58px]">Contact</div>
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
				<span className={styles.title}>Social</span>
				<ul className={styles.main_col_list}>
					{Contact.map((obj, idx) => (
						<ListItem item={obj} key={idx} className="text-base" />
					))}
				</ul>
			</motion.div>
		</>
	);
};

export default SocialList;
