import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        className={styles.headerImage}
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        alt="Instagram Logo"
      />
    </div>
  );
};

export default Header;
