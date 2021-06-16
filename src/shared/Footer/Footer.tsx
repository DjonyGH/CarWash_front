import React from 'react'
import styles from './footer.css'
import { Social } from './Social'
import { Icon } from '../Icon'

export function Footer() {
  const phone: string = '8-951-184-3737'

  return (
    <footer className={styles.footer}>
      <a className={styles.phone} href={`tel:${phone}`}>
        <Icon name={'phone'} size={24} />
        <span className={styles.text}>{phone}</span>
      </a>
      <Social />
    </footer>
  )
}
