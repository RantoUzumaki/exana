/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/about-us";
import ContactUs from "./components/contact-us";
import Home from "./components/home";
import Login from "./components/login";
import HeaderNavigation from "./components/navigation";
import Plans from "./components/plans";
import Register from "./components/register";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { updateUserData } from "./store/slices/userSlice";
import { useGetUserQuery } from "./services/authApi";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import MyProfile from "./components/my-profile";
import Investments from "./components/investments";
import Returns from "./components/returns";
import Donate from "./components/donate";

function App() {
	const dispatch = useDispatch();
	const [loggedIn, setLoggedIn] = useState(false);

	const { data, isError, error } = useGetUserQuery();

	useEffect(() => {
		if (isError && error.data.error) {
			setLoggedIn(true);
			toast.error("Please login again.");
		} else {
			dispatch(updateUserData(data));
			setLoggedIn(false);
		}
	}, [data, isError, loggedIn]);

	return (
		<Router>
			<HeaderNavigation />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/plans" element={<Plans />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/contact-us" element={<ContactUs />} />
				<Route element={<ProtectedRoutes isError={!loggedIn} />}>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Route>
				<Route path="*" element={<Home />} />
				<Route element={<ProtectedRoutes isError={loggedIn} />}>
					<Route path="/my-account" element={<MyProfile />} />
					<Route path="/investments" element={<Investments />} />
					<Route path="/returns" element={<Returns />} />
					<Route path="/donate" element={<Donate />} />
				</Route>
			</Routes>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				pauseOnHover={false}
				theme="light"
			/>
		</Router>
	);
}

export default App;
