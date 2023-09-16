import { Circular, SubmitBtn } from "components/UI";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { selectIsAdmin, selectIsAuth } from "redux/features/authSlice";
import { addDecorItem } from "redux/features/basket/basket";
import { getOneDecor, removeDecor, selectDecor } from "redux/features/decor";

import styles from "./christmasDecor.module.scss";

const PageItem = ({ getOne }) => {
	const isAdmin = useSelector(selectIsAdmin);
	const isAuth = useSelector(selectIsAuth);
	const params = useParams();
	const dispatch = useDispatch();
	const { itemOne: item, isLoading } = useSelector(selectDecor);

	useEffect(() => {
		dispatch(getOneDecor(params));
	}, []);

	const removeHandler = () => {
		try {
			dispatch(removeDecor(params));
			toast("Post remove");
			// navigate("/");
		} catch (error) {
			console.error(error);
		}
	};

	const addToCart = item => {
		console.log(isAuth);
		if (isAuth == false) {
			toast("Please login to add to cart!");
		}
		console.log(item);
		dispatch(addDecorItem(item));
	};

	if (isLoading) {
		return <Circular />;
	}

	return (
		<>
			<section className="container">
				<div className={styles.page}>
					<div className="max-h-[700px] overflow-hidden">
						<img
							src={`${process.env.REACT_APP_API_URL}/${item.img}`}
							alt={item.title}
							className="h-full w-full  object-cover"
						/>
					</div>

					<div className={styles.page_content}>
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
