import React from 'react';
import Link from 'next/link';
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
            <section className="section">
                <div className="container">
                    <div className="page__banner">
                        <h1>Personnalisation !</h1>
                        <span><Link href="/">Accueil</Link> » Personnalisation</span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default personnalisation