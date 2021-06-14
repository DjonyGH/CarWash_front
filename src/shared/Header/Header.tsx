import React from 'react'
import styles from './header.css'
import { Nav } from './Nav'
import { Profile } from './Profile'

export function Header() {
  return (
    <header className={styles.header}>
      <Profile />
      <Nav />
    </header>
  )
}
