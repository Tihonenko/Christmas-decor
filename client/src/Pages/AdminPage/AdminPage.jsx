import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { ModalDecor, ModalShop, TypeModal } from "../../components/";
import { Circular } from "../../components/UI";
import { selectIsAdmin } from "../../redux/features/authSlice";
import { createDecor } from "../../redux/features/decor";
import { createShop } from "../../redux/features/shop/shopSlice";
import { createShopTypes } from "../../redux/features/shopType/shopTypeSlice";
import { createTypeDecor } from "../../redux/features/typesDecor/typesSlice";

import AdminButton from "./adminButton";

const AdminPage = () => {
	const dispatch = useDispatch();
	const { isLoading } = useSelector(state => state.auth);
	const isAdmin = useSelector(selectIsAdmin);

	const [shopModalActive, setShopModalActive] = useState(false);
	const [decorModalActive, setDecorModalActive] = useState(false);
	const [typesActive, setTypesActive] = useState(false);
	const [typesShopActive, setTypesShopActive] = useState(false);

	if (isLoading) {
		return <Circular />;
	}

	if (isAdmin === "USER" || isAdmin === undefined) {
		return <Navigate to="/" />;
	}

	return (
		<section className="container mt-10 flex h-screen overflow-hidden">
			<div className="mr-25px flex w-1/2 flex-col gap-5 border-r border-lightblack pr-25px">
				<AdminButton onClick={() => setDecorModalActive(prev => !prev)}>
					Create Decor
				</AdminButton>
				<AdminButton onClick={() => setShopModalActive(prev => !prev)}>
					Create Shop
				</AdminButton>
				<AdminButton onClick={() => setTypesActive(prev => !prev)}>
					Create Decor Types
				</AdminButton>
				<AdminButton onClick={() => setTypesShopActive(prev => !prev)}>
					Create Shop Types
				</AdminButton>
			</div>
			<div className="w-1/2">
				<ModalDecor
					createItem={createDecor}
					active={decorModalActive}
					setActive={setDecorModalActive}
				/>
				<ModalShop
					createItem={createShop}
					active={shopModalActive}
					setActive={setShopModalActive}
				/>
				<TypeModal
					createType={createTypeDecor}
					nameModal="Create Decor Type"
					active={typesActive}
					setActive={setTypesActive}
				/>
				<TypeModal
					createType={createShopTypes}
					nameModal="Create Shop Type"
					active={typesShopActive}
					setActive={setTypesShopActive}
				/>
			</div>
		</section>
	);
};

export default AdminPage;
