import { Link, Navigate } from "react-router-dom";

import React from "react";
import { Circular, SubmitBtn } from "../../components/UI";
import { useDispatch, useSelector } from "react-redux";
import {
	logout,
	selectIsAdmin,
	selectIsAuth
} from "../../redux/features/authSlice";

const User = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuth);
	const isAdmin = useSelector(selectIsAdmin);
	const { isLoading, data } = useSelector(state => state.auth);

	if (isLoading) {
		return <Circular />;
	}
	const onClickLogout = () => {
		dispatch(logout());
		window.localStorage.clear("token");
	};

	return (
		<section className="container middle__content pt-10">
			{/* Проверяем авторизацию пользователя */}
			{isAuth ? (
				<div className="flex justify-between">
					<h3>{data.user.email || "Your email"}</h3>
					<div className="flex flex-col">
						<SubmitBtn onClick={onClickLogout}>Logout</SubmitBtn>
						{/* Если пользователь является админом, рендерим кнопку перехода */}
						{isAdmin === "ADMIN" ? (
							<Link className="a-hover" to="/admin">
								Admin Menu
							</Link>
						) : null}
					</div>
				</div>
			) : (
				<Navigate to="/Register" />
			)}
		</section>
	);
};

export default User;
