import { useState } from "react";
import { menu, close } from "../../../img/index";
import { motion } from "framer-motion";
import { Contact, dataNav, infoNav, userNav } from "../../../constans";
import Logo from "../../Logo/Logo";
import { ListItem } from "../../UI";

import styles from "./burger.module.scss";

const Burger = () => {
	const [isOpen, setIsOpen] = useState(false);

	const menuVariants = {
		open: {
			transform: "translateY(0%)",
			opacity: 1
		},
		close: {
			transform: "translateY(-100%)",
			opacity: 0
		}
	};

	const listVariants = {
		show: {
			transform: "translateY(0%)",
			opacity: "100%",
			transition: {
				transform: { type: "spring", duration: 0.5, delay: 0.2, stiffness: 33 }
			}
		},
		hidden: {
			transform: "translateY(-100%)",
			opacity: "0%",
			transition: {
				transform: { type: "spring", duration: 0.1, delay: 0.2, stiffness: 33 }
			}
		}
	};

	const menuTransition = {
		type: "spring",
		duration: 1,
		stiffness: 37,
		delay: 0.1,
		staggerChildren: 1,
		delayChildren: 1
	};

	const listTransition = {
		type: "spring",
		duration: 0.5,
		delay: 0.5,
		stiffness: 33
	};

	return (
		<>
			<button
				className={styles.menu_button}
				onClick={() => setIsOpen(prev => !prev)}
			>
				<img src={menu} alt="menu" />
			</button>

			<motion.section
				initial="hidden"
				animate={isOpen ? "open" : "close"}
				variants={menuVariants}
				transition={menuTransition}
				className={`absolute top-0 right-0 z-10 flex h-full w-full bg-lightwhite py-10 px-25px opacity-0`}
			>
				<div
					// onClick={() => setIsOpen(prev => !prev)}
					className={styles.burger_menu}
				>
					<div className={styles.burger_menu_head}>
						<Logo width={79} height={28} />
						<button onClick={() => setIsOpen(prev => !prev)}>
							<img src={close} alt="close" />
						</button>
					</div>
					<div
						className={styles.burger_menu_list}
						onClick={() => setIsOpen(prev => !prev)}
					>
						<motion.div
							initial="hidden"
							animate={isOpen ? "show" : "hidden"}
							variants={listVariants}
							transition={listTransition}
						>
							<h3>Shop</h3>
							<ul>
								{dataNav.map((item, idx) => (
									<ListItem className="text-[24px]" item={item} key={idx} />
								))}
							</ul>
						</motion.div>
						<motion.div
							initial="hidden"
							animate={isOpen ? "show" : "hidden"}
							variants={listVariants}
							transition={listTransition}
						>
							<h3>User</h3>
							<ul>
								{userNav.map((item, idx) => (
									<ListItem className="text-[24px]" item={item} key={idx} />
								))}
							</ul>
						</motion.div>
						<motion.div
							initial="hidden"
							animate={isOpen ? "show" : "hidden"}
							variants={listVariants}
							transition={listTransition}
						>
							<h3>Info</h3>
							<ul>
								{infoNav.map((item, idx) => (
									<ListItem className="text-[24px]" item={item} key={idx} />
								))}
							</ul>
						</motion.div>
						<motion.div
							initial="hidden"
							animate={isOpen ? "show" : "hidden"}
							variants={listVariants}
							transition={listTransition}
						>
							<h3>Contact</h3>
							<ul>
								{Contact.map((item, idx) => (
									<ListItem className="text-[24px]" item={item} key={idx} />
								))}
							</ul>
						</motion.div>
					</div>
				</div>
			</motion.section>
		</>
	);
};

export default Burger;
