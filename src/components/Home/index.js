import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";
import backgroundImg from "../../images/background.jpg";

const Home = (props) => {
  return (
    <div>
      <section className={styles.backgroundImg}>
        <div>
          <div className={styles.infoBox}>
            <h3>Champiñones Ostras</h3>
            <p>
              Nos especializamos en la producción de hongos comestibles con alto
              contenido nutricional.
            </p>
          </div>
        </div>
      </section>
      {/* <section className={styles.backgroundImg}>
        <div className={styles.container}>asdasd</div>
      </section> */}
    </div>
  );
};

Home.propTypes = {};

export default Home;
