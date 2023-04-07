import styles from './Banner.module.css'
import bannerAbout from "../../assets/images/banner-about.webp"
import bannerHome from "../../assets/images/banner-home.webp"

function Banner({ children }) {
    const bannerImage = window.location.pathname === '/about' ? bannerAbout : bannerHome
    const classNameImg = bannerImage === bannerHome ? styles.img + ' ' + styles.imgHome : styles.img
    const classNameBanner = bannerImage === bannerHome ? styles.banner + ' ' + styles.bannerHome : styles.banner

    return (
        <section className={classNameBanner}>
            <img className={classNameImg} src={bannerImage} alt='Bannière' />
            {children}
        </section>
    )
}

export default Banner