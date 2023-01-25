import React from 'react';
import styles from './styles/Card.module.css'

export default function Cardwine({nombre, vineria, imagen, location}) {
  return (
    <div className={styles.cardwine}>
      <div className={styles.card}>
        <div>
          <img src={imagen} />
        </div>        
        <div className={styles.textCard}>
          <div>{nombre}</div>
          <div>{vineria}</div>
          <div>{location}</div>
        </div>
        <div>
          <button>Ver mas</button>
        </div>
      </div>
    </div>
  );
}
