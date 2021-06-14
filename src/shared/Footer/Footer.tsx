import React from 'react'
import styles from './footer.css'
import { Social } from './Social'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.phone}> 8-951-184-3737</div>
      <Social />
    </footer>
  )
}
