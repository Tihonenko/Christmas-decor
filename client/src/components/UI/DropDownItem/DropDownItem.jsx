import React from "react";

const DropDownItem = ({ item, active, ...props }) => {
	return (
		<li className={` cursor-pointer py-1  px-[26px]`} {...props}>
			{item.name}
		</li>
	);
};

export default DropDownItem;
