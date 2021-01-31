import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";
import recipes from "../../images/recipes.jpg";
import { Link } from "react-router-dom";

import Social from "../Social";
const Home = (props) => {
  return (
    <div>
      <section className={styles.backgroundImg}>
        <div className={styles.infoBox}>
          <h3 className={styles.title}>Champiñones Ostras</h3>
          <p>
            Nos especializamos en la producción de hongos comestibles con alto
            contenido nutricional.
          </p>
          <Link to="/shop">
            <button className={styles.button}>Comprar</button>
          </Link>
        </div>
      </section>

      <Social />

      {/* <section className={styles.nutritionContainer}>
        Sabemos que no sólo te gusta comer rico, también quieres comer sano. Es
        por eso que aquí te mencionamos algunos de los beneficios nutricionales
        del champiñon ostra: - Fortalece tu sistema inmune y tiene alto
        contenido de antioxidantes para prevenir enfermedades. - Disminuye
        niveles de colesterol y triglicéridos en la sangre. - Ayuda a tu sistema
        digestivo. - Alto contenido proteico, siendo un remplazo excelente de la
        carne de origen animal. - ¡Muchísimos beneficios adicionales! ¡Síguenos
        para aprender más!
      </section> */}

      <div className={styles.recipesContainer}>
        <img src={recipes}></img>
        <div className={styles.recipesInfoContainer}>
          <h3>
            Pueden ser preparados salteados, en salsa, a la parrilla o al horno.
            ¡Con este tipo de champiñones se pueden preparar recetas exquisitas!
          </h3>
          <Link to="/recipes">
            <button className={styles.button}>Ver Recetas</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
