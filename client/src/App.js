import NotFoundPage from "Pages/NotFoundPage/NotFoundPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
	AboutUs,
	AdminPage,
	Basket,
	ChristmasDecor,
	HomePage,
	Login,
	PageItem,
	Register,
	RetroDecoration,
	Shop,
	ShopPageItem,
	User
} from "./Pages";
import { Layout } from "./components";
import { Circular } from "./components/UI";
import { getMe } from "./redux/features/authSlice";

function App() {
	const dispatch = useDispatch();
	const { isLoading } = useSelector(state => state.auth);

	useEffect(() => {
		dispatch(getMe());
	}, []);

	if (isLoading) {
		return (
			<div className="flex h-screen items-center">
				<Circular />
			</div>
		);
	}

	return (
		<div className="flex min-h-full flex-col  ">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="ChristmasDecor" element={<ChristmasDecor />} />
					<Route path="ChristmasDecor/:id" element={<PageItem />} />
					<Route path="shop" element={<Shop />} />
					<Route path="shop/:id" element={<ShopPageItem />} />
					<Route path="RetroDecoration" element={<RetroDecoration />} />
					<Route path="Register" element={<Register />} />
					<Route path="Login" element={<Login />} />
					<Route path="User" element={<User />} />
					<Route path="basket" element={<Basket />} />
					<Route path="Admin" element={<AdminPage />} />
					<Route path="AboutUs" element={<AboutUs />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<ToastContainer position="top-center" limit={2} />
		</div>
	);
}

export default App;
