import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${api}/auth/signin`,
        { email, password },
        config
      );

      localStorage.setItem("userToken", data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const userRegister = createAsyncThunk(
  "user/register",
  async ({ firstname, lastname, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post(
        `${api}/auth/signup`,
        {
          firstname,
          lastname,
          email,
          password,
        },
        config
      );
    } catch (error) {
      console.log(error);
    }
  }
);
