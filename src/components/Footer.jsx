import React from 'react';
import styles from './styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
    <p>Autor: José Germán Martínez</p>
    <p><a href="mailto:jgermanmm@gmail.com">jgermanmm@gmail.com</a></p>
    <p><a href="www.github.con/josegermanx">GitHub</a></p>
    </div>
  )
}