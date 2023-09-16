import React from "react";
import { saleBanner } from "../../../img";
import sl from "./salebanner.module.scss";

const SaleBanner = () => {
	return (
		<div src={sl.saleBanner}>
			<img src={saleBanner} alt="" className="object-cover w-full" />
		</div>
	);
};

export default SaleBanner;
