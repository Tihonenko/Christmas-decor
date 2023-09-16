import { MyInput, SubmitBtn } from "components/UI";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginUser, selectIsAuth } from "redux/features/authSlice";

import styles from "./login.module.scss";

const Login = () => {
	const isAuth = useSelector(selectIsAuth);
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		reset,
		setFocus,
		formState: { errors, isValid }
	} = useForm({
		defaultValues: {
			email: "",
			password: ""
		},
		mode: "onChange"
	});

	useEffect(() => {
		setFocus("email");
	}, []);

	const onSubmit = async value => {
		const data = await dispatch(loginUser(value));
		if ("token" in data.payload) {
			window.localStorage.setItem("token", data.payload);
		}

		reset();
	};

	if (isAuth) {
		return <Navigate to="/User" />;
	}

	return (
		<section className="container min-h-full flex-auto  pt-10">
			<div className={styles.content}>
				<div className={styles.login_form_title}>
					<Link className="w-1/2 border-r border-lightblack bg-lightred py-6 pl-6 text-lightwhite">
						<h2 className={styles.content_title}>Sign In</h2>
						<p className={styles.content_sub_title}>to your account</p>
					</Link>
					<Link to="/Register" className="w-1/2 py-6 pl-6">
						<h2 className={styles.content_title}>Sing Up</h2>
						<p className={styles.content_sub_title}>to create account</p>
					</Link>
				</div>
				<div className="flex w-full items-center md:w-1/2 md:border-r md:border-lightblack ">
					<form onSubmit={handleSubmit(onSubmit)} className={styles.login_form}>
						<label className="my-6 flex flex-col gap-2 text-base">
							<MyInput
								type="email"
								{...register("email", {
									required: "Email required field"
								})}
								errorsText={errors.email?.message}
							/>
							EMAIL ADDRESS
						</label>
						<label className="mb-6 flex flex-col gap-2 text-base">
							<MyInput
								type="password"
								{...register("password", {
									required: "Password required field",
									minLength: {
										value: 5,
										message: "Password min length 5 symbols"
									}
								})}
								errorsText={errors.password?.message}
							/>
							PASSWORD
						</label>
						<div className="">
							<SubmitBtn disabled={!isValid} type="submit">
								Sign In
							</SubmitBtn>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Login;
