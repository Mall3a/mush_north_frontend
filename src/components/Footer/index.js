import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { isMobile } from "react-device-detect";

const Footer = (props) => {
  return (
    <div className={styles.footerContainer}>
      <FontAwesomeIcon
        icon={faInstagram}
        className={styles.icon}
        onClick={() =>
          window.open("https://www.instagram.com/mush.north/", "_blank")
        }
      />
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
