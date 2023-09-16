import React from "react";

import sl from "./SubmitBtn.module.scss";

const SubmitBtn = ({ children, disabled, ...props }) => {
	return (
		<button
			disabled={disabled}
			{...props}
			className={`${props.className} ${sl.SubmitBtn}`}
		>
			{children}
		</button>
	);
};

export default SubmitBtn;
