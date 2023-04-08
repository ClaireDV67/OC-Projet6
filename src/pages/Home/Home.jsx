import Banner from "../../components/Banner/Banner"
import Gallery from "../../components/Gallery/Gallery"
import styles from "./Home.module.css"

function Home() {
  return (
    <main className={styles.main}>
      <Banner>
        <div className={styles.div}>Chez vous, partout et ailleurs</div>
      </Banner>
      <Gallery />
    </main>
  )
}

export default Home
