import styles from './CardLayout.module.css'
import React from 'react'

interface ICardLayoutProps {
  children?: React.ReactNode
  bgPic: boolean
}

const CardLayout: React.FC<ICardLayoutProps> = ({ children, bgPic }) => {
  return <div className={`${styles.card_layout} ${bgPic && styles.bg}`}>{children}</div>
}
export default CardLayout
