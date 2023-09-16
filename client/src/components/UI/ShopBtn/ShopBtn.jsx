import { Link } from "react-router-dom";
import sl from "./MyButton.module.scss";

const ShopBtn = ({ children, ...props }, ref) => {
	return (
		<Link {...props} className={`${props.className} ${sl.btn} `}>
			{children}
		</Link>
	);
};

export default ShopBtn;
