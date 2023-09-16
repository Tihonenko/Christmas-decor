import { AsideItem, ShopItem } from "components/";
import { listVariants } from "components/Footer/List/Variants";
import { Circular } from "components/UI";
import EmptyTitle from "components/UI/EmptyTitle/EmptyTitle";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import {
	getAllDecor,
	selectDecor,
	setSelectedDecor
} from "redux/features/decor/";
import { getAllTypes, selectTypes } from "redux/features/typesDecor/typesSlice";

import styles from "./christmasDecor.module.scss";

const ChristmasDecor = () => {
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const [, setSearchParams] = useSearchParams();

	const {
		isLoading,
		item: decor,
		setSelectDecorTypeId,
		setSelectDecorType,
		setSelectedLimit
	} = useSelector(selectDecor);
	const { item: types, setSelectType } = useSelector(selectTypes);

	useEffect(() => {
		dispatch(
			getAllDecor({
				typesId: setSelectDecorTypeId,
				limit: setSelectedLimit
			})
		);
		setSearchParams({
			typesId: setSelectDecorTypeId,
			limit: setSelectedLimit
		});
		dispatch(getAllTypes());
		// dispatch(filter())
	}, [setSelectDecorTypeId, setSelectedLimit]);

	if (types.isLoading) {
		return <Circular />;
	}

	return (
		<section className="container mt-4">
			<div>
				<h2 className={styles.page_title}>Decoration</h2>
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
						variants={listVariants}
						animate={isOpen ? "open" : "close"}
						className={styles.aside_list}
					>
						{types?.map(item => (
							<AsideItem
								active={item._id === setSelectDecorTypeId}
								item={item}
								key={item._id}
								onClick={() => dispatch(setSelectedDecor(item))}
							/>
						))}
					</motion.ul>
				</div>
				{isLoading ? (
					<Circular />
				) : (
					<div className="flex h-full flex-auto flex-col ">
						<h2 className="text-lg smd:text-3xl md:text-center">
							{setSelectDecorType?.name || "Lighting"}
						</h2>

						<div className="mt-7 flex w-full flex-col gap-x-25px sm:flex-row sm:flex-wrap">
							{decor.length === 0 ? (
								<EmptyTitle title="Decoration not found" />
							) : (
								decor?.map(item => <ShopItem item={item} key={item._id} />)
							)}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default ChristmasDecor;
