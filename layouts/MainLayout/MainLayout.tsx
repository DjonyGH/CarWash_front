import styles from './MainLayout.module.css'
import HeadComponent from '../../components/HeadComponent/HeadComponent'
import React from 'react'

interface IMainLayoutProps {
  children?: React.ReactNode
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return <div className={styles.main_layout}>{children}</div>
}
export default MainLayout
