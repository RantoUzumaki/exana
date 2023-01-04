import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../services/authApi";

const initialState = {
	token: localStorage.getItem("ExanaAccessToken")
		? localStorage.getItem("ExanaAccessToken")
		: null,
	data: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateUserData(state, action) {
			return { ...state, data: action.payload?.success?.data };
		},
		userLogout(state, action) {
			localStorage.removeItem("ExanaAccessToken");
			return { token: "", data: null };
		},
	},
	extraReducers: (builders) => {
		builders.addMatcher(
			authApi.endpoints.loginUser.matchFulfilled,
			(state, action) => {
				localStorage.setItem(
					"ExanaAccessToken",
					action.payload.success.accessToken,
				);
				return { ...state, data: action.payload.success.data };
			},
		);
	},
});

export const { updateUserData } = userSlice.actions;
export const { userLogout } = userSlice.actions;

export const selectUser = (state) => state.user.data;

export default userSlice.reducer;
