import { Circular, SubmitBtn } from "components/UI";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { selectIsAdmin, selectIsAuth } from "redux/features/authSlice";
import { addShopItem } from "redux/features/basket/basket";
import {
	getOneShop,
	removeShop,
	selectShop
} from "redux/features/shop/shopSlice";

import styles from "./shop.module.scss";

const PageItem = () => {
	const isAdmin = useSelector(selectIsAdmin);

	const isAuth = useSelector(selectIsAuth);

	const params = useParams();
	const dispatch = useDispatch();
	const { itemOne: item, isLoading } = useSelector(selectShop);

	useEffect(() => {
		dispatch(getOneShop(params));
	}, []);

	const removeHandler = () => {
		try {
			dispatch(removeShop(params));
			toast("Post remove");
		} catch (error) {
			console.error(error);
		}
	};

	const addToCart = item => {
		if (isAuth) dispatch(addShopItem(item));
	};

	if (isLoading) {
		return <Circular />;
	}

	return (
		<>
			<section className="middle__content container">
				<div className={styles.page}>
					<div className="max-h-[500px]">
						<img
							src={`${process.env.REACT_APP_API_URL}/${item.img}`}
							alt={item.title}
							className="h-full w-full object-cover"
						/>
					</div>

					<div className={styles.page__content}>
						<h2>{item?.title}</h2>
						<h4>Desciption</h4>
						<p className={styles.description_text}>{item?.description}</p>
						<div className="flex w-[340px] justify-between">
							<SubmitBtn
								onClick={() => addToCart(item)}
								className="flex w-[340px] items-baseline justify-between hover:text-lightred"
							>
								Add to cart <span className="text-xs">{item?.price}</span>
							</SubmitBtn>
						</div>
						{isAdmin === "ADMIN" && (
							<button
								onClick={removeHandler}
								className="mt-2 text-left hover:text-lightred"
							>
								Remove
							</button>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default PageItem;
