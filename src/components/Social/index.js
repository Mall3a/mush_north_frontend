import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "./index.module.css";

const Social = (props) => {
  return (
    <div className={styles.instagram}>
      <FontAwesomeIcon
        icon={faInstagram}
        className={styles.instagramIcon}
        onClick={() =>
          window.open("https://www.instagram.com/mush.north/", "_blank")
        }
      />

      <h3 className={styles.instagramTitle}>
        Síguenos en nuestras redes sociales
      </h3>
      <h5
        onClick={() =>
          window.open("https://www.instagram.com/mush.north/", "_blank")
        }
        className={styles.instagramName}
      >
        @mush.north
      </h5>
    </div>
  );
};

Social.propTypes = {};

export default Social;
