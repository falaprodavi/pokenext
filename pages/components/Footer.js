import styles from '../../styles/Footer.module.css'
import Link from "next/link"

export function Footer() {
    return (
        <div className={styles.footer_basic}>
            <footer>
                <div className={styles.social}><a href="#"><i className="icon ion-social-instagram"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-facebook"></i></a></div>
                <ul className={styles.list_inline}>
                    <li className={styles.list_inline_item}><Link href="/"><a>Home</a></Link></li>
                    <li className={styles.list_inline_item}><Link href="/about"><a>Sobre</a></Link></li>
                    <li className={styles.list_inline_item}><Link href="/contact"><a>Contato</a></Link></li>
                    
                    
                    
                </ul>
                <p className={styles.copyright}>Davi Firmino © 2022</p>
            </footer>
        </div>

    )
}