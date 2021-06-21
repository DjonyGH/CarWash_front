import styles from './index.module.css'
import MainLayout from '../layouts/MainLayout/MainLayout'
import CardLayout from '../layouts/CardLayout/CardLayout'

const Index = () => {
  return (
    <MainLayout>
      <CardLayout bgPic={true}>
        <div className={styles.main}>Main</div>
      </CardLayout>
    </MainLayout>
  )
}
export default Index
