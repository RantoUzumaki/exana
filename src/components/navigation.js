import React from "react";
import styles from "../global.styles";
import logo from "./../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderNavigation = () => {
  const location = new useLocation().pathname;
  const Navigate = new useNavigate();

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
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderNavigation;
