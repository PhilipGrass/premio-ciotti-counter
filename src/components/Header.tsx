import React from "react";
import bpm from "../assets/images/banco-bpm.jpg";
import coop from "../assets/images/coop-lombardia.jpg";
import panathlon from "../assets/images/panathlon.jpeg";
import sportesalute from "../assets/images/sportesalute.png";
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
            className={styles.sportesaluteLogo}
            src={sportesalute}
            alt="Logo Sport e salute"
          />
        </div>
        <div className={styles.headerTitle}>
          Premio letterario "Sandro Ciotti" - 2ᵃ edizione
        </div>
      </div>
    </div>
  );
};
