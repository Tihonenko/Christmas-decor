import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { $host } from "../../../utils/axios";

const error = arg => {
	toast.error(arg);
};

const initialState = {
	item: [],
	isLoading: false,
	isError: false,
	setSelectShopType: {}
};

export const getAllShopTypes = createAsyncThunk(
	"shopType/getAllShopTypes",
	async () => {
		try {
			const { data } = await $host.get("/shoptype");
			console.log(data);

			return { data, toast: toast(data.message) };
		} catch (e) {
			error(e.response.data.message);
		}
	}
);

export const createShopTypes = createAsyncThunk(
	"shopType/creteAllShopTypes",
	async params => {
		try {
			const { data } = await $host.post("shoptype", params);

			return { data, toast: toast(data.message) };
		} catch (e) {
			error(e.response.data.message);
		}
	}
);

const shopTypeSlice = createSlice({
	name: "shopType",
	initialState,
	reducers: {
		setFocus(state, action) {
			state.setSelectShopType = action.payload;
		}
	},
	extraReducers: {
		[getAllShopTypes.pending]: state => {
			state.isLoading = true;
		},
		[getAllShopTypes.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.item = action.payload.data.shopTypes;
		},
		[getAllShopTypes.rejected]: state => {
			state.isLoading = false;
			state.isError = true;
		},

		[createShopTypes.pending]: state => {
			state.isLoading = true;
		},
		[createShopTypes.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.item.push(action.payload);
		},
		[createShopTypes.rejected]: state => {
			state.isLoading = false;
			state.isError = true;
		}
	}
});

export const shopType = shopTypeSlice.reducer;
export const { setFocus } = shopTypeSlice.actions;
