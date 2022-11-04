import React, { useState } from "react";
import styles from "../global.styles";
import { MdAlternateEmail, MdOutlineLock } from "react-icons/md";
import { FiArrowRightCircle, FiEye, FiEyeOff } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { RiHome3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const Navigate = new useNavigate();
  const [view, setView] = useState({
    passInput: "",
    pass: false,
    confirmPassInput: "",
    confirmPass: false,
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
                placeholder="Last Name"
                className={styles.globalStyles.inputWithIcon}
                type="text"
              />
            </label>
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
                  className={styles.globalStyles.inputWithIconIcon}
                />
              </span>
              <input
                placeholder="Confirm Password"
                className={styles.globalStyles.inputWithIcon}
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
            <button className={styles.registerStyle.registerBtn}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
