/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from "../global.styles";
import { MdAlternateEmail, MdClose, MdOutlineLock } from "react-icons/md";
import { FiArrowRightCircle, FiEye, FiEyeOff } from "react-icons/fi";
import { RiHome3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../services/authApi";
import { toast } from "react-toastify";

const Login = () => {
	const Navigate = new useNavigate();
	const [view, setView] = useState(false);
	const [frgtPass, setFrgtPass] = useState(false);
	const [creds, setCreds] = useState({
		email: "rberk2011@gmail.com",
		password: "Ab@123456",
	});

	const [loginUser, { data, isError, error, isLoading }] =
		useLoginUserMutation();

	useEffect(() => {
		if (data && data.success) {
			toast.success(data.success.message);
			Navigate("/");
		}
		if (isError) {
			toast.error(error.data.error);
		}
	}, [data, isError]);

	const handleSubmit = async () => {
		await loginUser(creds);
	};

	document.addEventListener("keyup", (event) => {
		if (event.key === "Enter") {
			handleSubmit();
		}
	});

	return (
		<div className={styles.loginStyle.wrapper}>
			<div className={styles.loginStyle.wrapperContent}>
				<div className={styles.loginStyle.wrapperLeft}>
					<span className={styles.loginStyle.textHead}>EXANA Finance</span>
					<span className={styles.loginStyle.textSubHead}>
						The most popular peer to peer lending at SEA
					</span>
					<button className={styles.loginStyle.loginReadMoreBtn}>
						Read More
					</button>
				</div>
				<div className={styles.loginStyle.wrapperRight}>
					<div className={styles.loginStyle.wrapperRightTop}>
						<button
							onClick={() => Navigate("/")}
							className={styles.loginStyle.homeBtn}
						>
							<RiHome3Line className={styles.loginStyle.homeBtnIcon} /> Home
						</button>
						<button
							onClick={() => Navigate("/register")}
							className={styles.loginStyle.singUpBtm}
						>
							Register
							<FiArrowRightCircle className={styles.loginStyle.singUpBtnIcon} />
						</button>
					</div>
					<div className={styles.loginStyle.wrapperRightContent}>
						<span className={styles.loginStyle.rightTextHead}>
							Hello Again!
						</span>
						<span className={styles.loginStyle.rightTextSubHead}>
							Welcome Back
						</span>
						<label className={styles.globalStyles.inputWithIconLabel}>
							<span className={styles.globalStyles.inputWithIconSpan}>
								<MdAlternateEmail
									className={styles.globalStyles.inputWithIconIcon}
								/>
							</span>
							<input
								onChange={(e) => setCreds({ ...creds, email: e.target.value })}
								placeholder="Email Address"
								className={styles.globalStyles.inputWithIcon}
								type="text"
							/>
						</label>
						<label className={styles.globalStyles.inputWithIconLabel}>
							<span className={styles.globalStyles.inputWithIconSpan}>
								<MdOutlineLock
									className={styles.globalStyles.inputWithIconIcon}
								/>
							</span>
							<input
								onChange={(e) =>
									setCreds({ ...creds, password: e.target.value })
								}
								placeholder="Password"
								className={styles.globalStyles.inputWithIcon}
								type={view ? `text` : `password`}
							/>
							<span
								onClick={() => setView(!view)}
								className={styles.globalStyles.inputWithIconPasswordSpan}
							>
								{view ? (
									<FiEye
										className={styles.globalStyles.inputWithIconPasswordIcon}
									/>
								) : (
									<FiEyeOff
										className={styles.globalStyles.inputWithIconPasswordIcon}
									/>
								)}
							</span>
						</label>
						<button
							onClick={handleSubmit}
							className={styles.loginStyle.loginBtn}
						>
							{isLoading ? (
								<>
									<svg
										role="status"
										className="inline mr-3 w-4 h-4 text-white animate-spin"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="#E5E7EB"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentColor"
										/>
									</svg>
									Loading...
								</>
							) : (
								<>Login</>
							)}
						</button>
						<button
							className={styles.loginStyle.forgetPassBtn}
							onClick={() => setFrgtPass(true)}
						>
							Forget Password?
						</button>
					</div>
				</div>
			</div>

			<div
				className={
					frgtPass
						? styles.loginStyle.modelWrapper
						: styles.loginStyle.modelWrapperHide
				}
			>
				<div className={styles.loginStyle.modelWrapperMain}>
					<div className={styles.loginStyle.modelWrapperContent}>
						<div className={styles.loginStyle.modelWrapperHead}>
							<span className={styles.loginStyle.modelWrapperHeaderContent}>
								Forget Password ?
							</span>
							<button
								onClick={() => setFrgtPass(false)}
								className={styles.loginStyle.modelWrapperCloseBtn}
							>
								<MdClose
									className={styles.loginStyle.modelWrapperCloseBtnSvg}
								/>
							</button>
						</div>
						<div className={styles.loginStyle.modelWrapperbody}>
							<span>Enter Email</span>
							<label className={styles.globalStyles.inputWithIconLabel}>
								<span className={styles.globalStyles.inputWithIconSpan}>
									<MdAlternateEmail
										className={styles.globalStyles.inputWithIconIcon}
									/>
								</span>
								<input
									placeholder="Email Address"
									className={styles.globalStyles.inputWithIcon}
									type="text"
								/>
							</label>
							<button className={styles.loginStyle.modelWrapperSendBtn}>
								Send
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
