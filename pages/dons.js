import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import conceptBackground from '../public/assets/img/reborn-concept-background.webp'
import Image from 'next/image'
import donsIcon from '../public/assets/icons/reborn-dons.svg'
import Link from 'next/link';
import Head from 'next/head'

const dons = () => {
    return (
        <>
            <Head>
                <title>Dons - reborn</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="Dons - reborn" key="title" />
                <meta property="og:description" content="Pour le moment, nous acceptons les chaises, les tables, les vases et toutes les pièces détachées ou matériaux associés à ces objets (céramique, bois, métal…). Dans un avenir proche, on espère étendre nos réparations à d’autres objets, et grâce à vous, c’est bien parti !" />
                <meta name='description' content="Pour le moment, nous acceptons les chaises, les tables, les vases et toutes les pièces détachées ou matériaux associés à ces objets (céramique, bois, métal…). Dans un avenir proche, on espère étendre nos réparations à d’autres objets, et grâce à vous, c’est bien parti !" />
            </Head>
            <section className='wrapper'>
                <div className='concept__background__title'><Image src={conceptBackground} alt=''></Image></div>
                <Navbar></Navbar>
                <section className="section-colored dons">
                    <div className="container">
                        <h1><span className='span-font'>Dons</span></h1>
                        <div className='dons__content'>
                            <div className='dons__icon__container'> <Image src={donsIcon} alt='Icon de dons'></Image></div>
                            <h2>Comment donner ? </h2>
                            <p>Vous avez sans doute déjà vu nos équipes avec leur vélos cargo sillonner Bordeaux avec le sourire aux lèvres… c’est normal, on est toujours plus étonné par votre générosité ! Du coup, c’est tout simple, soit vous nous déposez les objets dont vous voulez vous débarrasser à notre atelier directement (ici), soit on vient les chercher chez vous, avec nos vélos cargo ou notre super camion électrique (uniquement à Bordeaux).
                            </p>
                            <h2>Quoi donner ? </h2>
                            <p>Pour le moment, nous acceptons les chaises, les tables, les vases et toutes les pièces détachées ou matériaux associés à ces objets (céramique, bois, métal…). Dans un avenir proche, on espère étendre nos réparations à d’autres objets, et grâce à vous, c’est bien parti !
                            </p>
                            <div className='btn__container'><Link href="/contact" className="btn primary-btn send-btn">
                                Nous contacter
                            </Link></div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer></Footer>
        </>
    );
}

export default dons