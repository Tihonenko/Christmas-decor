import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { $host } from "utils/axios";

const error = arg => {
	toast.error(arg);
};

const initialState = {
	item: [],
	isLoading: false,
	isError: false,
	addShopItem: {},
	addDecorItem: {}
};

export const addDecorItem = createAsyncThunk(
	"basket/addDecorItem",
	async params => {
		try {
			const { data } = await $host.post("basket/decor", params);

			return { data, toast: toast(data.message) };
		} catch (e) {
			console.error(e);
		}
	}
);

export const addShopItem = createAsyncThunk(
	"basket/addShopItem",
	async params => {
		try {
			const { data } = await $host.post("basket/shop", params);

			return { data, toast: toast(data.message) };
		} catch (e) {
			console.error(e);
		}
	}
);

export const getBasket = createAsyncThunk("basket/getBasket", async () => {
	try {
		const { data } = await $host.get("basket");

		return data;
	} catch (e) {
		console.error(e);
	}
});

export const removeBasketItem = createAsyncThunk(
	"basket/removeBasketItem",
	async (id, { dispatch }) => {
		try {
			const { data } = await $host.delete(`basket/${id}`, id);

			dispatch(removeItem(id));

			return { toast: toast(data.message) };
		} catch (e) {
			console.error(e);
		}
	}
);

export const basketSlice = createSlice({
	name: "basket",
	initialState,
	reducers: {
		removeItem: (state, action) => {
			state.item = state.item.filter(item => item._id !== action.payload);
		}
	},
	extraReducers: {
		//add decor
		[addDecorItem.pending]: state => {
			state.isLoading = true;
			state.item = [];
		},
		[addDecorItem.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.item.push(action.payload.data.decor);
		},
		[addDecorItem.rejected]: state => {
			state.isLoading = false;
			state.item = [];
			state.isError = true;
		},

		//add Shop Item
		[addShopItem.pending]: state => {
			state.isLoading = true;
			state.item = [];
		},
		[addShopItem.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.item.push(action.payload.data.shopItem);
		},
		[addShopItem.rejected]: state => {
			state.isLoading = false;
			state.item = [];
			state.isError = true;
		},

		// Fetch basket
		[getBasket.pending]: state => {
			state.isLoading = true;
			state.item = [];
		},
		[getBasket.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.item = action.payload;
		},
		[getBasket.rejected]: state => {
			state.isLoading = false;
			state.item = [];
			state.isError = true;
		}
	}
});

export const basket = basketSlice.reducer;

export const { removeItem } = basketSlice.actions;
