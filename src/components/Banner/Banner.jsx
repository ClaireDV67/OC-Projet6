import styles from "./Banner.module.css"
import bannerAbout from "../../assets/images/banner-about.webp"
import bannerHome from "../../assets/images/banner-home.webp"

function Banner({ children }) {
    const bannerImage = window.location.pathname === "/about" ? bannerAbout : bannerHome
    const classNameBanner = bannerImage === bannerHome ? styles.banner + " " + styles.bannerHome : styles.banner

    return (
        <section aria-label="Bannière" className={classNameBanner}>
            <img className={styles.img} src={bannerImage} alt="Bannière - Paysage" title="Bannière - Paysage "/>
            {children}
        </section>
    )
}

export default Banner