import React from 'react'
import styles from './nav.css'

export function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.nav_item}>Главная</div>
      <div className={styles.nav_item}>Записаться</div>
      <div className={styles.nav_item}>О нас</div>
    </div>
  )
}
