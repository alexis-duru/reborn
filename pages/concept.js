import React from 'react';
import conceptImage from '../public/assets/img/reborn-concept.webp'
import conceptBackground from '../public/assets/img/reborn-concept-background.webp'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Head from 'next/head'

const concept = () => {
    return (
        <>
            <Head>
                <title>Le concept - reborn</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="Le concept - reborn" key="title" />
                <meta property="og:description" content="Il est simple : donner une seconde vie à vos objets et ceux qu’on nous donne (on accepte les dons ici !). Fondée en 2022 par un petit groupe d’étudiants soucieux de participer à l'élaboration d’un nouveau mode de vie plus responsable, Reborn est une marque locale familiale et eco-friendly." />
                <meta name='description' content="Il est simple : donner une seconde vie à vos objets et ceux qu’on nous donne (on accepte les dons ici !). Fondée en 2022 par un petit groupe d’étudiants soucieux de participer à l'élaboration d’un nouveau mode de vie plus responsable, Reborn est une marque locale familiale et eco-friendly." />
            </Head>
            <Navbar></Navbar>
            <section className="wrapper">
                <div className="concept__background__title"><Image src={conceptBackground} alt=""></Image></div>
                <section className="section-colored concept">
                    <div className="container">
                        <h1>Notre <span className="span-font">Concept</span></h1>
                        <div className="concept__subcontainer">
                            <div className="concept__subcontainer-left">
                                <div><p>Since 14 nov. 2022</p></div>
                                <div><p>Projet hackathon</p></div>
                            </div>
                            <div className="concept__subcontainer-right">
                                <h2>Notre concept ? </h2>
                                <p>Il est simple : donner une <strong>seconde vie</strong> à vos objets et ceux qu’on nous donne (on accepte les dons <a href='/dons'>ici !</a>).
                                    Fondée en 2022 par un petit groupe d’étudiants soucieux de participer à l"élaboration d’un nouveau mode de vie plus <strong>responsable</strong>, Reborn est une marque locale familiale et eco-friendly.
                                </p>
                            </div>
                        </div>
                        <div className="concept__subcontainer">
                            <div className="concept__subcontainer-left2">
                                <h2>Où ?</h2>
                                <p>Basé à Bordeaux, notre atelier de réparation fourmille toute la semaine de 8h à 18h (généralement plus parce qu’on ne sait pas s’arrêter) pour donner une seconde vie à vos objets cassés. Comment ? Pas en les réparant à l’identique, ce ne serait pas drôle ! Mais plutôt en leur apportant un petit grain de folie comme un pied différent des 3 autres ou une anse orange fluo !
                                    Bref, pas besoin d’en dire plus, nos créations sont juste en dessous, on vous laisse jeter un coup d"œil et vous faire une idée par vous-même…
                                </p>
                            </div>
                            <div className="concept__subcontainer-right">
                                <Image src={conceptImage} loading="eager" alt="Photographie d'une table, avec un journal, une tasse et une paire de lunettes"></Image>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer></Footer>
        </>
    );
}

export default concept