import React from "react";

import sl from "./adminPage.module.scss";

const AdminButton = ({ children, ...props }) => {
	return (
		<button className={sl.btn} {...props}>
			{children}
		</button>
	);
};

export default AdminButton;
