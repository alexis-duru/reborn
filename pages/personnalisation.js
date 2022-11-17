import React from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Head from 'next/head'

const personnalisation = () => {
    return (
        <>
            <Head>
                <title>Personnaliser votre objet - reborn</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="Personnaliser votre objet - reborn" key="title" />
                <meta property="og:description" content="Reborn propose un service de personnalisation de vos objets cassés avec des pièces détachées de votre choix." />
                <meta name='description' content='Reborn propose un service de personnalisation de vos objets cassés avec des pièces détachées de votre choix.' />
            </Head>
            <Navbar></Navbar>
            <section className="section">
                <div className="container">
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}

export default personnalisation