import { motion } from "framer-motion";
import React, { useState } from "react";

const AsideItem = ({ active, item, ...props }) => {
	return (
		<motion.button
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
					duration: 1,
					delay: 0.5
				}
			}}
			disabled={active}
			className={`${
				active ? "cursor-default bg-lightblack text-lightwhite" : ""
			} cursor-pointer py-[7px] px-2 hover:bg-lightblack hover:text-lightwhite`}
			{...props}
		>
			<li className="text-left font-medium capitalize">{item.name}</li>
		</motion.button>
	);
};

export default AsideItem;
