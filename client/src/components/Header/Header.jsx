// import NavList from "./nav/NavList";
import useMediaQuery from "hooks/useMediaQuery";

import Logo from "../Logo/Logo";

import Burger from "./burger-menu/Burger";
import styles from "./header.module.scss";
import NavList from "./nav/NavList";

const Header = () => {
	const isAboveSmallQuery = useMediaQuery("(min-width: 1180px)");

	return (
		<header className="container mt-10">
			<nav className={styles.nav}>
				<Logo width={79} height={28} />

				{isAboveSmallQuery ? <NavList /> : <Burger />}
			</nav>
			<div className={styles.animate_block}></div>
		</header>
	);
};

export default Header;
