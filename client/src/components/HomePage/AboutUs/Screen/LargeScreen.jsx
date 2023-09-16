import { ShopBtn } from "components/UI";
import { motion } from "framer-motion";
import React from "react";

import { blockAnimation, textAnimation } from "../Variants";
import styles from "../aboutUs.module.scss";

const LargeScreen = () => {
	return (
		<>
			<div className={styles.content}>
				<div className={styles.content_top}>
					<div className={styles.content_top_second}>
						<motion.div
							className="overflow-hidden"
							variants={blockAnimation}
							custom={1}
						>
							<motion.p
								variants={textAnimation}
								custom={1}
								className={`${styles.second_title} ${styles.content_top_second_first}`}
							>
								In out store
							</motion.p>
						</motion.div>
						<motion.div
							className="overflow-hidden"
							variants={blockAnimation}
							custom={1.5}
						>
							<motion.p
								variants={textAnimation}
								custom={1.5}
								className={`${styles.second_title} ${styles.content_top_second_second}`}
							>
								you will find
							</motion.p>
						</motion.div>
					</div>
					<motion.div
						className="overflow-visible"
						variants={blockAnimation}
						custom={3}
					>
						<motion.h2
							variants={textAnimation}
							custom={3}
							className={styles.main_title}
						>
							everything you
						</motion.h2>
					</motion.div>
				</div>
				<div className={styles.content_center}>
					<motion.h2
						variants={textAnimation}
						custom={4}
						className={styles.main_title}
					>
						need
					</motion.h2>
					<div className={styles.content_center_second}>
						<motion.p
							variants={textAnimation}
							custom={5.5}
							className={styles.second_title}
						>
							to create an
						</motion.p>
						<motion.h2
							variants={textAnimation}
							custom={6}
							className={styles.main_title}
						>
							unforgettable
						</motion.h2>
					</div>
				</div>
				<div>
					<motion.h2
						variants={textAnimation}
						custom={7}
						className={styles.main_title}
					>
						atmosphere
					</motion.h2>
				</div>
				<motion.div
					variants={{
						hidden: {
							opacity: 0
						},
						visible: {
							opacity: 1,
							transition: {
								delay: 2,
								duration: 1
							}
						}
					}}
					className="mt-50px flex justify-center"
				>
					<ShopBtn to="/ChristmasDecor">Store</ShopBtn>
				</motion.div>
			</div>
		</>
	);
};

export default LargeScreen;
