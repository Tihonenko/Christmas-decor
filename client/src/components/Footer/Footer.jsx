import Logo from "components/Logo/Logo";
import { ListItem } from "components/UI";
import { Contact, dataNav, infoNav, userNav } from "constans";
import useMediaQuery from "hooks/useMediaQuery";

import Help from "./List/Help";
import ShopList from "./List/ShopList";
import SocialList from "./List/SocialList";
import styles from "./footer.module.scss";

const Footer = () => {
	const isAboveSmallQuery = useMediaQuery("(min-width: 992px)");

	return (
		<footer className="container mt-20">
			<section className={styles.main}>
				<div className={styles.main_logo}>
					<Logo width={191} height={66} />
				</div>
				<div className={styles.main_col}>
					{isAboveSmallQuery ? (
						<>
							<span className={styles.title}>Help</span>
							<ul className={styles.main_col_list}>
								{infoNav.map((obj, idx) => (
									<ListItem item={obj} key={idx} className="text-base" />
								))}
								{userNav.map((obj, idx) => (
									<ListItem item={obj} key={idx} className="text-base" />
								))}
							</ul>
						</>
					) : (
						<Help />
					)}
				</div>
				<div className={styles.main_col}>
					{isAboveSmallQuery ? (
						<>
							<span className={styles.title}>Contact</span>
							<ul className={`${styles.main_col_list} hidden `}>
								{Contact.map((obj, idx) => (
									<ListItem item={obj} key={idx} className="text-base" />
								))}
							</ul>
						</>
					) : (
						<SocialList />
					)}
				</div>
				<div className={styles.main_col}>
					{isAboveSmallQuery ? (
						<>
							<span className={styles.title}>Shop</span>
							<ul className={styles.main_col_list}>
								{dataNav.map((obj, idx) => (
									<ListItem item={obj} key={idx} className="text-base" />
								))}
							</ul>
						</>
					) : (
						<ShopList />
					)}
				</div>
			</section>
			<p className="my-5">Website by Tihonenko</p>
		</footer>
	);
};

export default Footer;
