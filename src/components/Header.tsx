import React from "react";
import bpm from "../assets/images/banco-bpm.jpg";
import coop from "../assets/images/coop-lombardia.jpg";
import panathlon from "../assets/images/panathlon.jpeg";
import styles from "../app.module.css";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.mainLogoContainer}>
        <img
          className={styles.panathlonLogo}
          src={panathlon}
          alt="Logo Panathlon Club Milano"
        />
      </div>
      <div className={styles.rightColumnHeader}>
        <div className={styles.otherLogoContainer}>
          <img
            className={styles.coopLogo}
            src={coop}
            alt="Logo Coop Lombardia"
          />
          <img className={styles.bpmLogo} src={bpm} alt="Logo Banca BPM" />
        </div>
        <div className={styles.headerTitle}>
          Premio di letteratura sportiva "Sandro Ciotti" 2021
        </div>
      </div>
    </div>
  );
};
