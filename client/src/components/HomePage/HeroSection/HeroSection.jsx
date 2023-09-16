import { ShopBtn } from "components/UI/";
import { motion } from "framer-motion";
import React from "react";

import { ball, xmasBall } from "../../../img";

import { textAnimation } from "./Variants";
import styles from "./heroSection.module.scss";

const HeroSection = () => {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.2, once: true }}
			className="container mt-20"
		>
			<div className="mb-36">
				<div className={styles.title_top}>
					<motion.h2
						variants={textAnimation}
						custom={1}
						className={styles.title_top_second_text}
					>
						the best
					</motion.h2>
					<motion.h1
						variants={textAnimation}
						custom={2}
						className={styles.title_top_main_text}
					>
						Christmas
						<motion.img
							variants={textAnimation}
							custom={2.5}
							className="inline w-[65px] -translate-y-4 smd:w-[85px] 2smd:w-[105px] md:w-[120px] lg:w-[150px] 2lg:ml-20 2xl:w-[200px]"
							src={xmasBall}
							alt="sxmaball"
						/>
					</motion.h1>
				</div>
				<div className={styles.title_bottom}>
					<motion.div
						variants={{
							hidden: {
								width: "0%"
							},
							visible: custom => ({
								width: "25%",
								transition: {
									duration: 1,
									type: "spring",
									delay: custom * 0.2,
									stiffness: 47
								}
							})
						}}
						custom={3}
					></motion.div>
					<motion.h1
						variants={textAnimation}
						custom={4}
						className={styles.title_bottom_main_text}
					>
						Dec
						<span className={styles.title_bottom_ball}>
							<img src={ball} alt="o" />
						</span>
						ration
					</motion.h1>
				</div>
				<motion.p
					variants={textAnimation}
					custom={5}
					className="flex justify-end  text-sm md:text-[18px] lg:text-base"
				>
					just for you
				</motion.p>
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
		</motion.section>
	);
};

export default HeroSection;
