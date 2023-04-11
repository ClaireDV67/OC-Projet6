import Banner from "../../components/Banner/Banner"
import Gallery from "../../components/Gallery/Gallery"
import styles from "./Home.module.css"

function Home() {
  return (
    <main role="main">
      <Banner>
        <div className={styles.div}>Chez vous, partout et ailleurs</div>
      </Banner>
      <h2 className="visually-hidden">Accueil - Appartements</h2>
      <Gallery />
    </main>
  )
}

export default Home
