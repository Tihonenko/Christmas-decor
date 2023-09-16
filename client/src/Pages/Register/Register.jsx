import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

import { MyInput, SubmitBtn } from "../../components/UI";
import { registerUser, selectIsAuth } from "../../redux/features/authSlice";

import styles from "./register.module.scss";

const Register = () => {
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
		const data = await dispatch(registerUser(value));
		if ("token" in data.payload) {
			window.localStorage.setItem("token", data.payload);
		}
		reset();
		return <Navigate to="/User" />;
	};

	if (isAuth) {
		return <Navigate to="/User" />;
	}
	return (
		<section className="container min-h-full flex-auto pt-10">
			<div className={styles.content}>
				<div className={styles.login_form_title}>
					<Link
						to="/Login"
						className="w-1/2 border-r border-lightblack  py-6 pl-6 "
					>
						<h2 className={styles.content_title}>Sign In</h2>
						<p className={styles.content_sub_title}>to your account</p>
					</Link>
					<Link
						to="/Register"
						className="w-1/2 bg-lightred py-6 pl-6 text-lightwhite"
					>
						<h2 className={styles.content_title}>Sing Up</h2>
						<p className={styles.content_sub_title}>to create account</p>
					</Link>
				</div>
				<div className="w-ful flex">
					<div className="w-0 md:w-1/2 md:border-r md:border-lightblack"></div>
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
								Create
							</SubmitBtn>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Register;
