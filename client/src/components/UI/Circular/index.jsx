import { motion } from "framer-motion";
import React from "react";

const styleContainer = {
	position: "relative",
	width: 100,
	height: 100
};

const styleSpan = {
	display: "block",
	width: 50,
	height: 50,
	border: "7px solid #eee",
	borderTop: "7px solid #3B3C40",
	borderRadius: "50%",
	boxSizing: "border-box",
	position: "absolute",
	top: 0,
	left: 0
};

const spinTransition = {
	repeat: Infinity,
	ease: "easeInOut",
	// width: ['100%', '50%'],
	duration: 1
};

const Circular = () => {
	return (
		<div className="flex w-full justify-center align-middle">
			<div style={styleContainer}>
				<motion.span
					style={styleSpan}
					animate={{ rotate: 360 }}
					transition={spinTransition}
				/>
			</div>
		</div>
	);
};

export default Circular;
