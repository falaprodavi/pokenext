import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

import Head from "next/head"

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <title>PokeNext</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
                <link rel="stylesheet" href="assets/css/style.css" />
            </Head>
            <Navbar />
            <main className="main-container">{children}</main>
            <Footer />
        </>
    )
}