import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { $host } from "../../../utils/axios";

const error = arg => {
	toast.error(arg);
};

const initialState = {
	item: [],
	itemOne: {},
	isLoading: false,
	isError: false,
	setSelectShopTypeId: "63663575cbbe866fa6b57d89",
	setSelectShopType: {}
};

export const getAllShop = createAsyncThunk("shop/getAllShop", async arg => {
	try {
		const { shopTypeId } = arg;

		const { data } = await $host.get("/shopitem", {
			params: {
				shopTypeId
			}
		});

		return data;
	} catch (e) {
		error(e.response.data.message);
	}
});

export const getOneShop = createAsyncThunk("shop/getOneShop", async params => {
	try {
		const { id } = params;

		const { data } = await $host.get(`/shopitem/${id}`);

		return data;
	} catch (e) {
		error(e.response.data.message);
	}
});

export const createShop = createAsyncThunk("shop/createShop", async params => {
	try {
		const { data } = await $host.post("/shopitem", params);

		return { data, toast: toast(data.message) };
	} catch (e) {
		error(e.response.data.message);
	}
});

export const removeShop = createAsyncThunk("shop/removeShop", async params => {
	try {
		const { id } = params;

		const { data } = await $host.delete(`/shopitem/${id}`, id);
		// const { data } = await $host.post("/decor", params);

		return { data, toast: toast(data.message) };
	} catch (e) {
		error(e.response.data.message);
	}
});

const shopSlice = createSlice({
	name: "shop",
	initialState,
	reducers: {
		selectShopType: (state, action) => {
			state.setSelectShopType = action.payload;
			state.setSelectShopTypeId = action.payload._id;
		}
	},
	extraReducers: {
		// Get All types Shop
		[getAllShop.pending]: state => {
			state.isLoading = true;
			state.isError = false;
		},
		[getAllShop.fulfilled]: (state, action) => {
			state.item = action.payload.shopItems;
			state.isLoading = false;
		},
		[getAllShop.rejected]: state => {
			state.item = [];
			state.isError = true;
		},

		// One Item
		[getOneShop.pending]: state => {
			state.isLoading = true;
			state.isError = false;
		},
		[getOneShop.fulfilled]: (state, action) => {
			state.itemOne = action.payload;
			state.isLoading = false;
		},
		[getOneShop.rejected]: state => {
			state.itemOne = {};
			state.isError = true;
		},

		// Creata shop
		[createShop.pending]: state => {
			state.isLoading = true;
			state.isError = false;
		},
		[createShop.fulfilled]: (state, action) => {
			state.item.push(action.payload);
			state.isLoading = false;
		},
		[createShop.rejected]: state => {
			state.item = [];
			state.isError = true;
		},

		//Remove shop
		[removeShop.pending]: (state, action) => {
			state.isLoading = true;
		},
		[removeShop.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.item = state.item.filter(item => item._id !== action.payload);
		},
		[removeShop.rejected]: (state, action) => {
			state.isLoading = false;
			state.isError = true;
		}
	}
});

export const selectShop = state => state.shop;
export const { selectShopType } = shopSlice.actions;

export const shop = shopSlice.reducer;
