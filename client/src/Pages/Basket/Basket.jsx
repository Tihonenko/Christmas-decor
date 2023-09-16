import EmptyTitle from "components/UI/EmptyTitle/EmptyTitle";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { selectIsAuth } from "redux/features/authSlice";
import { getBasket } from "redux/features/basket/basket";

import BasketItem from "./BasketItem";
import sl from "./basket.module.scss";

const Basket = () => {
	const isAuth = useSelector(selectIsAuth);
	const { item: basket } = useSelector(state => state.basket);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBasket());
	}, []);

	if (!isAuth) {
		return toast.error("Please authorization"), (<Navigate to="/register" />);
	}

	console.log(basket);

	return (
		<section className=" middle__content container mt-10 ">
			<h2 className={sl.title__basket}>Your Basket</h2>
			<div className="flex flex-1 flex-col items-center gap-3">
				{basket.length === 0 ? (
					<EmptyTitle title="Decoration not found" />
				) : (
					basket?.map(item => <BasketItem key={item._id} item={item} />)
				)}
			</div>
		</section>
	);
};

export default Basket;
