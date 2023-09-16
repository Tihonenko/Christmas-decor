import { motion } from "framer-motion";
import React from "react";

const EmptyTitle = ({ title }) => {
	return (
		<motion.h2
			initial={{ opacity: 0, transform: "translateY(30%)" }}
			animate={{
				opacity: 1,
				transform: "translateY(0)",
				transition: {
					duration: 0.5,
					delay: 0.2
				}
			}}
			className="item-center text-2xl font-bold md:text-lg"
		>
			{title}
		</motion.h2>
	);
};

export default EmptyTitle;
