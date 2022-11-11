import PageLayout from '../components/pageLayout'
import styles from '../styles/Home.module.css'
import Navi from '../components/navi'
import Hero from '../components/heroMain'
import Footer from '../components/footer'
export default function Home() {
  return (
    <PageLayout title="Buidlers">
      <div className={styles.container}>
        <Navi />
        <div className=" mt-20">
          <Hero></Hero>
          <Footer></Footer>
        </div>
      </div>
    </PageLayout>
  )
}
