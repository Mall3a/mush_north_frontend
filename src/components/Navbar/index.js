import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { useEffect } from "react";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  const navlinks = (
    <>
      <li>
        <Link className={styles.link} to="/shop">
          Tienda
        </Link>
      </li>
      <li>
        <Link className={styles.link} to="/about">
          Nosotros
        </Link>
      </li>
      <li>
        <Link className={styles.link} to="/contact">
          Contacto
        </Link>
      </li>
    </>
  );

  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <div className={styles.mobilemenuicon} onClick={() => setOpen(!open)}>
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>

        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>

        <ul className={styles.navLinks}>{navlinks}</ul>
      </nav>

      {open && <ul className={styles.mobilemenu}>{navlinks}</ul>}
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
