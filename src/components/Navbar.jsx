import React from "react";
import styles from "./styles/Navbar.module.css";

export default function Navigation() {
  return (
    <div className={styles.navContainer}>
        <div className={styles.titulo}>
          <div><h2>Los vinos de la casa</h2></div>
        </div>
        <div className={styles.contenedorLinks}>
          <ul className={styles.links}>
            <li href="#home">Home</li>
            <li href="#features">Viñaterías</li>
            <li href="#pricing">Compra</li>
          </ul>
        </div>        
    </div>     
    
  );
}