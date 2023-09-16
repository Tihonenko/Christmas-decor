import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { MyInput, ShopBtn } from "../../UI";

const TypeModal = ({ active, setActive, nameModal, createType }) => {
	const dispatch = useDispatch();
	const [name, setName] = useState("");

	const submitHandler = async () => {
		try {
			const data = new FormData();
			data.append("name", name);
			await dispatch(createType(data));
		} catch (e) {
			console.error(e);
		}
	};

	return (
		active && (
			<div className=" w-full overflow-hidden" onClick={() => setActive(false)}>
				<div onClick={e => e.stopPropagation()}>
					<h3 className="mb-3 text-base font-semibold">{nameModal}</h3>
					<form
						onSubmit={e => e.preventDefault()}
						className="flex flex-col gap-5"
					>
						<label className="flex flex-col gap-3">
							Type name:
							<MyInput value={name} onChange={e => setName(e.target.value)} />
						</label>
						<div className="flex gap-3">
							<ShopBtn
								className="text-center transition-transform delay hover:-translate-y-1 "
								onClick={submitHandler}
							>
								Create
							</ShopBtn>
							<button
								className="bg-lightred py-[4px] px-[26px] text-lightwhite transition-all delay hover:-translate-y-1"
								onClick={() => setName("")}
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

export default TypeModal;
