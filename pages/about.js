import Link from "next/link"
import Image from "next/image"

import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p>Mollit esse do eiusmod sunt amet qui ullamco. Est labore culpa excepteur enim adipisicing consectetur labore veniam labore cillum. Sunt pariatur incididunt do minim sint pariatur in laboris non ea anim labore. Proident magna tempor veniam anim sit culpa voluptate ex velit.</p>
            <p>Cupidatat ea incididunt qui tempor sunt amet eu in magna veniam labore officia ea id. Nostrud anim exercitation do occaecat. Proident pariatur magna ipsum dolore. Ea enim et dolore ea aliqua officia. Consectetur ad eiusmod id mollit id sit quis. Enim est irure dolore sunt do ea consectetur sint enim est officia consequat eu est. Labore cillum minim magna aliqua.</p>

            <Image src="/images/charizard.png" width="250px" height="250px" alt="Charizard"/>
        </div>
    )
    }