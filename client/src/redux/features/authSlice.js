import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { $host } from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
	data: null,
	status: null,
	isLoading: false,
	role: ""
};

export const registerUser = createAsyncThunk(
	"auth/registerUser",
	async params => {
		try {
			const { data } = await $host.post("/user/register", params);

			if (data.token) {
				window.localStorage.setItem("token", data.token);
			}

			const user = jwt_decode(data.token);

			return {
				data,
				user,
				toast: toast.success(data.message)
			};
		} catch (e) {
			toast.error(e.response.data.message);
		}
	}
);

export const loginUser = createAsyncThunk("auth/loginUser", async params => {
	try {
		const { data } = await $host.post("/user/login", params);

		if (data.token) {
			window.localStorage.setItem("token", data.token);

			const user = jwt_decode(data.token);

			return {
				user,
				toast: toast(data.message)
			};
		}
	} catch (e) {
		toast.error(e.response.data.message);
	}
});

export const getMe = createAsyncThunk("auth/loginUser", async () => {
	try {
		const { data } = await $host.get("/user/auth");

		const user = data.user;
		return { data, user };
	} catch (e) {}
});

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: state => {
			state.data = null;
			state.status = null;
			state.user = null;
		}
	},
	extraReducers: {
		// Register
		[registerUser.pending]: state => {
			state.status = "loading...";
			state.isLoadint = true;
		},
		[registerUser.fulfilled]: (state, action) => {
			state.status = "loaded";
			state.isLoading = false;
			state.role = action.payload.user.role;
			state.data.push(action.payload);
		},
		[registerUser.rejected]: (state, action) => {
			state.status = "error";
			state.data = null;
			state.isLoading = false;
		},

		// Login
		[loginUser.pending]: state => {
			state.status = "loading...";
			state.isLoading = true;
		},
		[loginUser.fulfilled]: (state, action) => {
			state.data = action.payload.data;
			state.role = action.payload.user.role;
			state.status = "loaded";
			state.isLoading = false;
		},
		[loginUser.rejected]: (state, action) => {
			state.status = "error";
			state.data = null;
			state.isLoading = false;
		},

		// Get Me
		[getMe.pending]: state => {
			state.status = "loading...";
			state.isLoading = true;
			state.role = "";
		},
		[getMe.fulfilled]: (state, action) => {
			state.status = "loaded";
			state.data = action.payload;
			state.role = action.payload?.user.role;
			state.isLoading = false;
		},
		[getMe.rejected]: (state, action) => {
			state.status = "error";
			state.data = null;
			state.isLoading = true;
		}
	}
});

export const selectIsAuth = state => Boolean(state.auth.data);
export const selectIsAdmin = state => {
	return state.auth.role;
};
export const auth = authSlice.reducer;

export const { logout } = authSlice.actions;
