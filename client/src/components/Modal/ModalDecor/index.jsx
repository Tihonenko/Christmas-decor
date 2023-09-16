import { DropDownItem, MyInput, ShopBtn } from "components/UI/";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllTypes,
	selectTypes,
	setFocus
} from "redux/features/typesDecor/typesSlice";

import styles from "./modalDecor.module.scss";

const ModalDecor = ({ active, setActive, createItem }) => {
	const dispatch = useDispatch();

	const { item, setSelectType } = useSelector(selectTypes);

	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");
	const [open, setOpen] = useState(false);

	useEffect(() => {
		dispatch(getAllTypes());
	}, []);

	const dropHandler = item => {
		dispatch(setFocus(item));
		setOpen(!open);
	};

	const submitHandler = async () => {
		try {
			const data = new FormData();
			data.append("title", title);
			data.append("price", price);
			data.append("description", description);
			data.append("image", image);
			data.append("typesId", setSelectType._id);
			await dispatch(createItem(data));
		} catch (e) {
			console.log(e);
		}
	};

	const clearHandler = () => {
		setTitle("");
		setPrice("");
		setDescription("");
		dispatch(setFocus(""));
		setImage("");
	};

	return (
		active && (
			<div className=" w-full overflow-hidden" onClick={() => setActive(false)}>
				<div onClick={e => e.stopPropagation()}>
					<form
						onSubmit={e => e.preventDefault()}
						className="flex flex-col gap-3"
					>
						<h3 className="mb-3 text-base font-semibold">Create Decoration</h3>
						<label className="flex flex-col gap-3">
							Title:
							<MyInput
								value={title}
								onChange={e => setTitle(e.target.value)}
								type="text"
								className="w-full"
							/>
						</label>
						<div className="h-full w-full">
							<ShopBtn
								className={`${
									open
										? " bg-lightblack text-lightwhite transition-all delay-150"
										: "z-10  transition-all delay"
								} relative w-[146px] text-center`}
								onClick={() => setOpen(!open)}
							>
								{setSelectType.name || "Select Type"}
							</ShopBtn>
							<ul
								className={`${
									open
										? "z-10 -translate-y-1 opacity-100 transition-drop delay"
										: "-z-20 -translate-y-5 opacity-0 transition-drop delay"
								} absolute flex w-[146px]  flex-col gap-1  rounded-b-btn bg-lightblack pt-1 text-center text-lightwhite`}
							>
								{item?.map(item => (
									<DropDownItem
										active={item._id === setSelectType._id}
										onClick={() => dropHandler(item)}
										key={item._id}
										item={item}
									/>
								))}
							</ul>
						</div>
						<label className="flex flex-col gap-3">
							Price:
							<MyInput
								value={price}
								onChange={e => setPrice(e.target.value)}
								type="text"
								className="w-full "
							/>
						</label>
						<label className="flex flex-col gap-3">
							Description:
							<textarea
								value={description}
								onChange={e => setDescription(e.target.value)}
								className="min-h-[100px] w-full rounded-btn border border-gray-400 bg-white px-4 py-2 text-lightblack outline-none transition-all focus:border-lightblack"
							></textarea>
						</label>
						<label className={styles.image_label}>
							Image
							<MyInput
								onChange={e => setImage(e.target.files[0])}
								type="file"
								className="mt-3 hidden"
							/>
						</label>
						<div className="flex justify-center object-cover">
							{image && (
								<img
									className="max-h-[200px] max-w-full"
									src={URL.createObjectURL(image)}
									alt=""
								/>
							)}
						</div>

						<div className="flex gap-3">
							<ShopBtn
								onClick={submitHandler}
								type="submit"
								className="text-center transition-transform delay hover:-translate-y-1"
							>
								Create
							</ShopBtn>
							<button
								onClick={clearHandler}
								className=" bg-lightred py-[4px] px-[26px] text-lightwhite transition-all delay hover:-translate-y-1"
							>
								Clear
							</button>
						</div>
					</form>
				</div>
			</div>
		)
	);
};

export default ModalDecor;
