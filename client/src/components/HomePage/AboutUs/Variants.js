export const textAnimation = {
	hidden: {
		y: -50,
		opacity: 0
	},
	visible: custom => ({
		y: 0,
		opacity: 1,
		transition: {
			duration: 3,
			type: "spring",
			delay: custom * 0.3,
			stiffness: 75
		}
	})
};

export const blockAnimation = {
	hidden: {
		y: 100,
		opacity: 0
	},
	visible: custom => ({
		y: 0,
		opacity: 1,

		transition: {
			duration: 3,
			type: "spring",
			delay: custom * 0.3,
			stiffness: 55
		}
	})
};
