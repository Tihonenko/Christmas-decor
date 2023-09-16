// import { textAnimation } from "./Variants";
import { ShopBtn } from "components/UI";
import { motion } from "framer-motion";
import useMediaQuery from "hooks/useMediaQuery";

import LargeScreen from "./Screen/LargeScreen";
import { blockAnimation, textAnimation } from "./Variants";
import styles from "./aboutUs.module.scss";

const AboutUs = () => {
	const isAboveSmallScreen = useMediaQuery("(min-width: 992px)");

	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.2, once: true }}
			className="container mt-20"
		>
			{isAboveSmallScreen ? (
				<LargeScreen />
			) : (
				<>
					<div className={styles.content}>
						<div className={styles.content_sub_title}>
							<motion.p
								variants={textAnimation}
								custom={1}
								className={`${styles.second_title}`}
							>
								In our store you will find
							</motion.p>
						</div>
						<div className={styles.content_top}>
							<motion.h2
								variants={textAnimation}
								custom={2}
								className={styles.main_title}
							>
								everything
							</motion.h2>
							<motion.h2
								variants={textAnimation}
								custom={2.5}
								className={styles.main_title}
							>
								you
							</motion.h2>
							<motion.h2
								variants={textAnimation}
								custom={3}
								className={styles.main_title}
							>
								need
							</motion.h2>
						</div>
						<div className={styles.content_center}>
							<motion.p
								variants={textAnimation}
								custom={4}
								className={`${styles.second_title}`}
							>
								to create an
							</motion.p>
							<motion.h2
								variants={textAnimation}
								custom={5}
								className={styles.main_title}
							>
								unforgettable
							</motion.h2>
						</div>
						<div className={styles.content_bottom}>
							<motion.h2
								variants={textAnimation}
								custom={5.5}
								className={styles.main_title}
							>
								atmosphere
							</motion.h2>
						</div>
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
				</>
			)}
		</motion.section>
	);
};

export default AboutUs;
