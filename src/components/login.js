import React, { useState } from "react";
import styles from "../global.styles";
import { MdAlternateEmail, MdOutlineLock } from "react-icons/md";
import { FiArrowRightCircle, FiEye, FiEyeOff } from "react-icons/fi";
import { RiHome3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = new useNavigate();
  const [view, setView] = useState(false);

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
              Sign-up
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
            <button className={styles.loginStyle.loginBtn}>Login</button>
            <button className={styles.loginStyle.forgetPassBtn}>
              Forget Password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
