import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "./api";

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({
		baseUrl: api,
		prepareHeaders: (headers, { getState }) => {
			const token = localStorage.getItem("ExanaAccessToken");

			if (token) {
				headers.set("x-access-token", token);
			}

			return headers;
		},
	}),

	endpoints: (builder) => ({
		loginUser: builder.mutation({
			query: (body) => {
				return {
					url: "login",
					method: "post",
					body,
				};
			},
		}),
		registerUser: builder.mutation({
			query: (body) => {
				return {
					url: "register",
					method: "post",
					body,
				};
			},
		}),
		getUser: builder.query({
			query: () => {
				return {
					url: "userDetail",
					method: "get",
				};
			},
		}),
	}),
});

export const {
	useLoginUserMutation,
	useRegisterUserMutation,
	useGetUserQuery,
} = authApi;
