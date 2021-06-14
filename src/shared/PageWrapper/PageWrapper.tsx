import React from 'react'
import styles from './pageWrapper.css'

interface IPageWrapperProps {
  children?: React.ReactNode
}

export const PageWrapper: React.FC<IPageWrapperProps> = ({ children }) => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.inner}>{children}</div>
    </div>
  )
}
