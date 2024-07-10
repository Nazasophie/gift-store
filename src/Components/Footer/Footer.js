import React from "react";
import styles from "./FooterStyle.module.css";
import { Link } from "react-router-dom";

import call from "../Assets/call.png";
import Vector from "../Assets/Vector.svg";
import facebook from "../Assets/images/facebook-icon.svg";
import instagram from "../Assets/images/insta-icon.svg";
import twitter from "../Assets/images/twitter-icon.svg";
import linkedin from "../Assets/images/linkeedin-icon.svg";

const Footer = () => {
  return (
    <footer className={styles["landing-page-footer"]}>
      <div className={styles["left-section"]}>
        <div className={styles["gifts"]}>
          <Link to="/">
            <a href="">
              <p className={styles["logo"]}>Gyfts</p>
            </a>
          </Link>
          <p className={styles["logo-p"]}>
            We offer a wide selection of unique <br /> and high-quality gifts
            for every occasion
          </p>
        </div>
        <p className={styles["logo-copy"]}>
          copyrights &copy;2023 Gifts.ng. All rights reserved
        </p>
      </div>
      <div className={styles["middle-section"]}>
        <div>
          <p className={styles["support"]}>Support</p>
          <p className={styles["phone"]}>
            <img className={styles["call-icon"]} src={call} alt="Call Icon" />{" "}
            +23470655432124
          </p>
          <p className={styles["email"]}>
            <img
              className={styles["email-icon"]}
              src={Vector}
              alt="Vector Icon"
            />{" "}
            officialgyfts24@gmail.com
          </p>
        </div>
        <p className={styles["social-p"]}>Social Links</p>
        <div className={styles["social-links"]}>
          <a
            href="https://www.facebook.com/sample"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles["social-icon"]}
              src={facebook}
              alt="Facebook Icon"
            />
          </a>
          <a
            href="https://www.instagram.com/sample"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles["social-icon"]}
              src={instagram}
              alt="Instagram Icon"
            />
          </a>
          <a
            href="https://www.twitter.com/sample"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles["social-icon"]}
              src={twitter}
              alt="Twitter Icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/sample"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles["social-icon"]}
              src={linkedin}
              alt="LinkedIn Icon"
            />
          </a>
        </div>
      </div>
      <div className={styles["right-section"]}>
        <p className={styles["subscribe"]}>Subscribe to our Newsletter</p>
        <p className={styles["latest"]}>For Latest News and updates</p>
        <form>
          <input
            className={styles.emailInput}
            type="email"
            placeholder="Email Address"
          />
          <br></br>
          <button className={styles.btn} type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
