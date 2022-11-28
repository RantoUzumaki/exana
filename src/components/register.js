/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from "react";
import styles from "../global.styles";
import { MdAlternateEmail, MdOutlineLock } from "react-icons/md";
import { FiArrowRightCircle, FiEye, FiEyeOff } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { RiHome3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../features/user/userAction";
import { toast } from "react-toastify";

const Register = () => {
  const Navigate = new useNavigate();
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [view, setView] = useState({
    passInput: "",
    pass: false,
    confirmPassInput: "",
    confirmPass: false,
  });
  const [creds, setCreds] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, success } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      toast.success("You are Registered Successfully.");
    }
  }, [success]);

  useEffect(() => {
    const mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (creds.email.length > 0) {
      if (creds.email.match(mailformat)) {
        setErrors({ ...errors, email: false });
      } else {
        setErrors({ ...errors, email: true });
      }
    }

    const passformat =
      /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^!&*+=]).*$/g;

    if (creds.password.length > 7) {
      if (creds.password.match(passformat)) {
        setErrors({ ...errors, password: false });
      } else {
        setErrors({ ...errors, password: true });
      }
    }

    if (creds.confirmPassword.length > 0) {
      if (creds.password === creds.confirmPassword) {
        setErrors({ ...errors, confirmPassword: false });
      } else {
        setErrors({ ...errors, confirmPassword: true });
      }
    }
  }, [creds.email, creds.password, creds.confirmPassword]);

  const handleSubmit = () => {
    if (
      creds.firstname.length === 0 ||
      creds.lastname.length === 0 ||
      creds.email.length === 0 ||
      creds.password.length === 0
    ) {
      alert("Please Fill the Details");
      return;
    }
    dispatch(userRegister(creds));
  };

  document.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      if (errors.email || errors.password || errors.confirmPassword) {
        alert("Please clear the error");
      } else {
        handleSubmit();
      }
    }
  });

  return (
    <div className={styles.registerStyle.wrapper}>
      <div className={styles.registerStyle.wrapperContent}>
        <div className={styles.registerStyle.wrapperLeft}>
          <span className={styles.registerStyle.textHead}>EXANA Finance</span>
          <span className={styles.registerStyle.textSubHead}>
            The most popular peer to peer lending at SEA
          </span>
          <button className={styles.registerStyle.registerReadMoreBtn}>
            Read More
          </button>
        </div>
        <div className={styles.registerStyle.wrapperRight}>
          <div className={styles.registerStyle.wrapperRightTop}>
            <button
              onClick={() => Navigate("/")}
              className={styles.registerStyle.homeBtn}
            >
              <RiHome3Line className={styles.registerStyle.homeBtnIcon} /> Home
            </button>
            <button
              onClick={() => Navigate("/login")}
              className={styles.registerStyle.singinBtm}
            >
              Sign-in
              <FiArrowRightCircle
                className={styles.registerStyle.singinBtnIcon}
              />
            </button>
          </div>
          <div className={styles.registerStyle.wrapperRightContent}>
            <span className={styles.registerStyle.rightTextHead}>
              Hello Again!
            </span>
            <span className={styles.registerStyle.rightTextSubHead}>
              Sign Up to Get Started
            </span>
            <label className={styles.globalStyles.inputWithIconLabel}>
              <span className={styles.globalStyles.inputWithIconSpan}>
                <FaUserCircle
                  className={styles.globalStyles.inputWithIconIcon}
                />
              </span>
              <input
                onChange={(e) =>
                  setCreds({ ...creds, firstname: e.target.value })
                }
                placeholder="First Name"
                className={styles.globalStyles.inputWithIcon}
                type="text"
              />
            </label>

            <label className={styles.globalStyles.inputWithIconLabel}>
              <span className={styles.globalStyles.inputWithIconSpan}>
                <FaUserCircle
                  className={styles.globalStyles.inputWithIconIcon}
                />
              </span>
              <input
                onChange={(e) =>
                  setCreds({ ...creds, lastname: e.target.value })
                }
                placeholder="Last Name"
                className={styles.globalStyles.inputWithIcon}
                type="text"
              />
            </label>

            <label className={styles.globalStyles.inputWithIconLabel}>
              <span className={styles.globalStyles.inputWithIconSpan}>
                <MdAlternateEmail
                  className={
                    errors.email
                      ? styles.globalStyles.inputWithIconIconError
                      : styles.globalStyles.inputWithIconIcon
                  }
                />
              </span>
              <input
                onChange={(e) => {
                  setCreds({ ...creds, email: e.target.value });
                  if (e.target.value.length <= 0) {
                    setErrors({ ...errors, email: false });
                  }
                }}
                placeholder="Email Address"
                className={
                  errors.email
                    ? styles.globalStyles.inputWithIconError
                    : styles.globalStyles.inputWithIcon
                }
                type="email"
              />
            </label>

            <label className={styles.globalStyles.inputWithIconLabel}>
              <span className={styles.globalStyles.inputWithIconSpan}>
                <MdOutlineLock
                  className={
                    errors.password
                      ? styles.globalStyles.inputWithIconIconError
                      : styles.globalStyles.inputWithIconIcon
                  }
                />
              </span>
              <input
                onChange={(e) => {
                  setCreds({ ...creds, password: e.target.value });
                  if (e.target.value.length <= 0) {
                    setErrors({ ...errors, password: false });
                  }
                }}
                placeholder="Password"
                className={
                  errors.password
                    ? styles.globalStyles.inputWithIconError
                    : styles.globalStyles.inputWithIcon
                }
                type={view.pass ? `text` : `password`}
              />
              <span
                onClick={() => setView({ ...view, pass: !view.pass })}
                className={styles.globalStyles.inputWithIconPasswordSpan}
              >
                {view.pass ? (
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

            <label className={styles.globalStyles.inputWithIconLabel}>
              <span className={styles.globalStyles.inputWithIconSpan}>
                <MdOutlineLock
                  className={
                    errors.confirmPassword
                      ? styles.globalStyles.inputWithIconIconError
                      : styles.globalStyles.inputWithIconIcon
                  }
                />
              </span>
              <input
                onChange={(e) => {
                  setCreds({ ...creds, confirmPassword: e.target.value });
                  if (e.target.value.length <= 0) {
                    setErrors({ ...errors, confirmPassword: false });
                  }
                }}
                placeholder="Confirm Password"
                className={
                  errors.confirmPassword
                    ? styles.globalStyles.inputWithIconError
                    : styles.globalStyles.inputWithIcon
                }
                type={view.confirmPass ? `text` : `password`}
              />
              <span
                onClick={() =>
                  setView({ ...view, confirmPass: !view.confirmPass })
                }
                className={styles.globalStyles.inputWithIconPasswordSpan}
              >
                {view.confirmPass ? (
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

            {errors.email ? (
              <div className={styles.globalStyles.errorDiv}>
                <span>Please enter a valid email address</span>
              </div>
            ) : null}
            {errors.password ? (
              <div className={styles.globalStyles.errorDiv}>
                <span>Please enter a valid Password</span>
                <span>Password Should contain atleast</span>
                <span>1 Uppercase (A - Z)</span>
                <span>1 Lowercase (a - z)</span>
                <span>1 Numberic (0 - 9)</span>
                <span>1 Symbols (@#$%^!&*+=)</span>
              </div>
            ) : null}
            {errors.confirmPassword ? (
              <div className={styles.globalStyles.errorDiv}>
                <span>Password and Confirm Password doesn't match</span>
              </div>
            ) : null}
            <button
              disabled={errors.email || errors.password || loading}
              onClick={handleSubmit}
              className={
                errors.email || errors.password
                  ? styles.registerStyle.registerBtnDisabled
                  : styles.registerStyle.registerBtn
              }
            >
              {loading ? (
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
                `Register`
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
