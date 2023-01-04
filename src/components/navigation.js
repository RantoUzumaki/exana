import React, { useState } from "react";
import styles from "../global.styles";
import logo from "./../assets/logo.png";
import userImg from "./../assets/user.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, userLogout } from "../store/slices/userSlice";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const HeaderNavigation = () => {
	const dispatch = useDispatch();
	const location = new useLocation().pathname;
	const Navigate = new useNavigate();
	const [dropdown, setDropdown] = useState(false);

	const user = useSelector(selectUser);

	return (
		<>
			{location === "/login" || location === "/register" ? null : (
				<div className={styles.headerNavStyle.headerWrapper}>
					<div className={styles.headerNavStyle.headerLeft}>
						<img
							onClick={() => Navigate("/")}
							src={logo}
							alt="Exana"
							className={styles.headerNavStyle.logoImg}
						/>
						<button
							onClick={() => Navigate("/")}
							className={
								location === "/"
									? styles.headerNavStyle.headerLeftBtnActive
									: styles.headerNavStyle.headerLeftBtn
							}
						>
							Home
						</button>
						<button
							onClick={() => Navigate("/plans")}
							className={
								location === "/plans"
									? styles.headerNavStyle.headerLeftBtnActive
									: styles.headerNavStyle.headerLeftBtn
							}
						>
							Plans
						</button>
						<button
							onClick={() => Navigate("/about-us")}
							className={
								location === "/about-us"
									? styles.headerNavStyle.headerLeftBtnActive
									: styles.headerNavStyle.headerLeftBtn
							}
						>
							About us
						</button>
						<button
							onClick={() => Navigate("/contact-us")}
							className={
								location === "/contact-us"
									? styles.headerNavStyle.headerLeftBtnActive
									: styles.headerNavStyle.headerLeftBtn
							}
						>
							Contact us
						</button>
					</div>
					<div className={styles.headerNavStyle.headerRight}>
						{!user ? (
							<>
								<button
									onClick={() => Navigate("/register")}
									className={styles.headerNavStyle.signupBtn}
								>
									SignUp
								</button>
								<button
									onClick={() => Navigate("/login")}
									className={styles.headerNavStyle.loginBtn}
								>
									Login
								</button>
							</>
						) : (
							<button
								onClick={() => setDropdown(!dropdown)}
								onBlur={() => setDropdown(false)}
								className={
									dropdown
										? styles.headerNavStyle.profileDropdownActive
										: styles.headerNavStyle.profileDropdown
								}
							>
								<span className={styles.headerNavStyle.profileDropdownName}>
									{user.firstName} {user.lastName}
								</span>
								<img
									src={userImg}
									alt="user"
									className={styles.headerNavStyle.profileDropdownImg}
								/>
								{dropdown ? (
									<FaChevronUp
										className={styles.headerNavStyle.profileDropdownIcon}
									/>
								) : (
									<FaChevronDown
										className={styles.headerNavStyle.profileDropdownIcon}
									/>
								)}

								{dropdown ? (
									<div
										className={styles.headerNavStyle.profileDropdownItemMenu}
									>
										<div
											className={styles.headerNavStyle.profileDropdownItem}
											onClick={() => Navigate("/my-account")}
										>
											My Account
										</div>
										<div
											className={styles.headerNavStyle.profileDropdownItem}
											onClick={() => Navigate("/investments")}
										>
											Investments
										</div>
										<div
											className={styles.headerNavStyle.profileDropdownItem}
											onClick={() => Navigate("/returns")}
										>
											Returns
										</div>
										<div
											className={styles.headerNavStyle.profileDropdownItem}
											onClick={() => Navigate("/donate")}
										>
											Donate
										</div>
										<div
											className={styles.headerNavStyle.profileDropdownItemLast}
											onClick={() => {
												dispatch(userLogout());
												window.location.reload();
											}}
										>
											Logout
										</div>
									</div>
								) : null}
							</button>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default HeaderNavigation;
