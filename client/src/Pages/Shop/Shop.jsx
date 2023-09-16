import { AsideItem, ShopItem } from "components";
import { listVariants } from "components/Footer/List/Variants";
import { Circular } from "components/UI";
import EmptyTitle from "components/UI/EmptyTitle/EmptyTitle";
import { motion } from "framer-motion";
import { user } from "img";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { getAllShop, selectShopType } from "redux/features/shop/shopSlice";
import { getAllShopTypes } from "redux/features/shopType/shopTypeSlice";

import styles from "./shop.module.scss";

const Shop = () => {
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);

	// Получаем из redux state типы
	const { item: types } = useSelector(state => state.shopType);
	const {
		item: shop,
		isLoading,
		setSelectShopType,
		setSelectShopTypeId
	} = useSelector(state => state.shop);

	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		dispatch(
			getAllShop({
				shopTypeId: setSelectShopTypeId
			})
		);
		// Передаем параметры в поисковую строку
		setSearchParams({
			shopType: setSelectShopTypeId
		});
		dispatch(getAllShopTypes());
	}, [setSelectShopTypeId]);

	return (
		<section className="container mt-4">
			<div>
				<h2 className={styles.page_title}>Gift</h2>
				<Link to="/" className="mt-5">
					Home
				</Link>
				<div className="mt-5">
					<div
						className={styles.filter_btn}
						onClick={() => setIsOpen(prev => !prev)}
					>
						Filter
					</div>
					<motion.ul
						className={styles.aside_list}
						initial="hidden"
						variants={listVariants}
						animate={isOpen ? "open" : "close"}
					>
						{/* Выводим боковое меню, еслиA оно есть */}
						{types?.map(item => (
							<AsideItem
								active={item._id === setSelectShopTypeId}
								item={item}
								key={item._id}
								onClick={() => dispatch(selectShopType(item))}
							/>
						))}
					</motion.ul>
				</div>
				{isLoading ? (
					<Circular />
				) : (
					<div className="flex h-full flex-auto flex-col ">
						<h2 className="text-lg capitalize smd:text-3xl md:text-center">
							{setSelectShopType?.name || "Candies"}
						</h2>

						<div className="mt-7 flex w-full flex-col gap-x-25px sm:flex-row sm:flex-wrap">
							{/* Выводим элементы магазина */}
							{shop.length === 0 ? (
								<EmptyTitle title="Decoration not found" />
							) : (
								shop?.map(item => <ShopItem item={item} key={item._id} />)
							)}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Shop;
