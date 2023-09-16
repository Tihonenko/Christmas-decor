import { Contact, dataNav, infoNav, userNav } from "../../../constans";
import { ListItem } from "../../UI";
import styles from "../header.module.scss";

const NavList = () => {
	return (
		<div className={styles.nav_help}>
			<ul className={styles.nav_help_title}>
				<li>Shop</li>
				<li>User</li>
				<li>Info</li>
				<li>Contact</li>
			</ul>
			<div className={styles.nav_help_menu}>
				<ul>
					{dataNav.map((item, idx) => (
						<ListItem size={16} item={item} key={idx} />
					))}
				</ul>
				<ul>
					{userNav.map((item, idx) => (
						<ListItem size={16} item={item} key={idx} />
					))}
				</ul>
				<ul>
					{infoNav.map((item, idx) => (
						<ListItem size={16} item={item} key={idx} />
					))}
				</ul>
				<ul>
					{Contact.map((item, idx) => (
						<ListItem size={16} item={item} key={idx} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default NavList;
