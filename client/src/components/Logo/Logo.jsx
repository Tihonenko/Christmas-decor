import { Link } from "react-router-dom";
import { logo } from "../../img";
import { motion } from "framer-motion";

const Logo = ({ height, width }) => {
	return (
		<Link to="" className="outline-none">
			<motion.img width={width} height={height} src={logo} alt="LOGO" />
		</Link>
	);
};

export default Logo;
