import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse"
import styles from "./About.module.css"

function About() {
  return (
    <main role="main">
      <Banner />
      <section className={styles.section}>
        <h2 className="visually-hidden">À propos</h2>
        <Collapse
          titleCollapse="Fiabilité"
          textCollapse="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <Collapse
          titleCollapse="Respect"
          textCollapse="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          titleCollapse="Service"
          textCollapse="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Collapse
          titleCollapse="Sécurité"
          textCollapse="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </section>
    </main>
  )
}

export default About
