import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { $host } from "../../../utils/axios";
import { toast } from "react-toastify";

const error = (arg) => {
	toast.error(arg);
};

const initialState = {
	item: [],
	isLoading: false,
	setSelectType: {},
};

export const createTypeDecor = createAsyncThunk(
	"typesDecor/createTypeDecor",
	async (params) => {
		try {
			const { data } = await $host.post("/type", params);
			return { data, toast: toast(data.message) };
		} catch (e) {
			error(e.response.data.message);
		}
	}
);

export const getAllTypes = createAsyncThunk("typesDecor/getAllTypes", async () => {
	try {
		const { data } = await $host.get("/type");
		return data;
	} catch (e) {
		error(e.response.data.message);
	}
});

const typesSlice = createSlice({
	name: "types",
	initialState,
	reducers: {
		setFocus(state, action) {
			state.setSelectType = action.payload;
		},
	},
	extraReducers: {
		//Create Types
		[createTypeDecor.pending]: (state) => {
			state.isLoading = true;
		},
		[createTypeDecor.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.item.push(action.payload);
		},
		[createTypeDecor.rejected]: (state) => {
			state.isLoading = false;
		},

		//Get all typesDecor
		[getAllTypes.pending]: (state) => {
			state.isLoading = true;
		},
		[getAllTypes.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.item = action.payload.types;
		},
		[getAllTypes.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export const selectTypes = (state) => state.types;
export const { setFocus } = typesSlice.actions;
export const types = typesSlice.reducer;
