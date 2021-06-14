import React from 'react'
import styles from './social.css'
import { Icon } from '../../Icon'

export function Social() {
  return (
    <ul className={styles.social}>
      <li className={styles.social_item}>
        <a className={styles.link}>
          <Icon name={'instagram'} size={28} />
        </a>
      </li>
      <li className={styles.social_item}>
        <a className={styles.link} href=''>
          <Icon name={'whatsapp'} size={28} />
        </a>
      </li>
      <li className={styles.social_item}>
        <a className={styles.link}>
          <Icon name={'twitter'} size={28} />
        </a>
      </li>
    </ul>
  )
}
