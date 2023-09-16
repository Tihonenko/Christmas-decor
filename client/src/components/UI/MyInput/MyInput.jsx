import React from "react";

import sl from "./MyInput.module.scss";

const MyInput = React.forwardRef(({ errorsText, ...props }, ref) => {
	return (
		<>
			<input
				ref={ref}
				{...props}
				className={`${props.className} ${sl.MyInput} `}
			/>
			<div className="text-sm text-lightred">
				<p>{errorsText}</p>
			</div>
		</>
	);
});

export default MyInput;
