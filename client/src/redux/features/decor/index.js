import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { $host } from "../../../utils/axios";
import { toast } from "react-toastify";

const error = arg => {
	toast.error(arg);
};

const initialState = {
	item: [],
	itemOne: {},
	// filterItem: [],
	isLoading: false,
	isError: false,
	setSelectDecorType: {},
	setSelectDecorTypeId: "635d03d478fe16022dceec4a",
	setSelectedPage: {},
	setSelectedLimit: {}
};

export const createDecor = createAsyncThunk(
	"decor/createDecor",
	async params => {
		try {
			const { data } = await $host.post("/decor", params);

			return { data, toast: toast(data.message) };
		} catch (e) {
			error(e.response.data.message);
		}
	}
);

export const removeDecor = createAsyncThunk(
	"decor/removeDecor",
	async params => {
		try {
			const { id } = params;

			const { data } = await $host.delete(`/decor/${id}`, id);
			// const { data } = await $host.post("/decor", params);

			return { data, toast: toast(data.message) };
		} catch (e) {
			error(e.response.data.message);
		}
	}
);
export const getAllDecor = createAsyncThunk("decor/getAllDecor", async arg => {
	try {
		const { typesId, limit } = arg;
		const { data } = await $host.get(`/decor`, {
			params: {
				typesId,
				limit
			}
		});
		return data;
	} catch (e) {
		error(e.response.data.message);
	}
});

export const getOneDecor = createAsyncThunk(
	"decor/getOneDecor",
	async params => {
		const { id } = params;

		try {
			const { data } = await $host.get(`/decor/${id}`);

			return data;
		} catch (e) {
			error(e.response.data.message);
		}
	}
);

export const decorSlice = createSlice({
	name: "decor",
	initialState,
	reducers: {
		setSelectedDecor(state, action) {
			state.setSelectDecorTypeId = action.payload._id;
			state.setSelectDecorType = action.payload;
		}

		// filter(state, action) {
		// 	const typeItem = current(state.item);
		// 	console.log(action);
		// 	if (action.payload) {
		// 		const toggleItem = typeItem.filter((obj) => obj.typesId === action.payload);
		// 		state.filterItem = toggleItem;
		// 	} else if (action.payload === undefined) {
		// 		state.filterItem = typeItem.filter(obj => obj.typesId === "635d03d478fe16022dceec4a");
		// 	};
	},

	extraReducers: {
		// Create decor
		[createDecor.pending]: state => {
			state.isLoading = true;
		},
		[createDecor.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.item.push(action.payload);
		},
		[createDecor.rejected]: state => {
			state.isLoading = false;
			state.isError = true;
		},

		//Remove decor
		[removeDecor.pending]: (state, action) => {
			state.isLoading = true;
		},
		[removeDecor.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.item = state.item.filter(item => item._id !== action.payload);
		},
		[removeDecor.rejected]: (state, action) => {
			state.isLoading = false;
			state.isError = true;
		},

		// Get all Decor
		[getAllDecor.pending]: state => {
			state.isLoading = true;
		},
		[getAllDecor.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.item = action.payload;
		},
		[getAllDecor.rejected]: state => {
			state.isLoading = false;
			state.isError = true;
		},

		//Get one Decor
		[getOneDecor.pending]: state => {
			state.isLoading = true;
		},
		[getOneDecor.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.itemOne = action.payload;
		},
		[getOneDecor.rejected]: state => {
			state.isLoading = false;
			state.isError = true;
		}
	}
});

export const selectDecor = state => state.decor;
export const { setSelectedDecor, filter, setOneItem } = decorSlice.actions;
export const decor = decorSlice.reducer;
