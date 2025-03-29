import FooterContent from '@content/site.json'
import styles from '@/styles/footer.module.css'
import Image from 'next/image'
import SocialMediaLinks from '@content/site.json'
import SocialMedia from '@components/navigation/SocialMedia'

const Footer = () => {
    const SoMe = SocialMediaLinks.Footer.socialMedia

    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.desktopLogo}>
                    <Image
                        src={FooterContent.Footer.desktopLogoImage}
                        width={250}
                        height={150}
                        alt={FooterContent.Footer.desktopLogoAlt}
                    />
                </div>
                <div className={styles.someContainer}>
                  {FooterContent.Footer.socialMediaTitle &&
                    <header className={styles.someTitle}>
                      <h3>{FooterContent.Footer.socialMediaTitle}</h3>
                    </header>
                  }
                  <div className={styles.someLinksWrapper}>
                    <SocialMedia some={SoMe} showText={false} />
                  </div>
                </div>
            </div>
            <div className={styles.subFooter}>
                <div className={styles.subFooterWrapper}>
                    <p className={styles.detailsTxt}>&copy; {FooterContent.Footer.Owner}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;