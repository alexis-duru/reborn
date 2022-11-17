import React from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import RebornFleche from '../public/assets/icons/reborn-fleche.svg'
import RebornReparation from '../public/assets/icons/reborn-reparation.svg'
import RebornReparationReception from '../public/assets/icons/reborn-reparation-reception.svg'
import RebornReparationFini from '../public/assets/icons/reborn-reparation-fini.svg'



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
            <section className='wrapper'>
                <Navbar></Navbar>
                <section className="section-colored personnalisation">
                    <div className="container">
                        <h1>Votre<span className='span-font'> Personnalisation</span></h1>
                        <div className='personnalisation__content'>
                            <div className='personnalisation__procede'>
                                <Image src={RebornReparation} alt="Photographie brocante des Quinquonces"></Image>
                                <Image src={RebornFleche} alt="Photographie brocante des Quinquonces"></Image>
                                <Image src={RebornReparationReception} alt="Photographie brocante des Quinquonces"></Image>
                                <Image src={RebornFleche} alt="Photographie brocante des Quinquonces"></Image>
                                <Image src={RebornReparationFini} alt="Photographie brocante des Quinquonces"></Image>
                            </div>
                            <p>Reborn propose un service de personnalisation de vos objets cassés avec des pièces détachées de votre choix. Un pied jaune sur une chaise de paille ou encore un vase réparé à partir de morceaux de céramiques récupérés, nous prenons en compte vos demandes et essayons d’y répondre au mieux, de la manière que vous voulez !
                            </p>
                        </div>
                        {/*TODO*/}
                        <div className='btn__container'><button disabled className="btn primary-btn send-btn">
                            Reserver*
                        </button><p>*La réservation est momentanément indisponible</p></div>

                        <div className='personnalisation__content'>
                            <h3>Comment ça marche ?</h3>
                            <p>Reborn propose un service de personnalisation de vos objets cassés avec des pièces détachées de votre choix. Un pied jaune sur une chaise de paille ou encore un vase réparé à partir de morceaux de céramiques récupérés, nous prenons en compte vos demandes et essayons d’y répondre au mieux, de la manière que vous voulez !
                            </p>
                            <p>PS : le paiement se fait directement à l’atelier pour que notre site soit le plus léger possible <strong>(#environmentfriendly)</strong> et histoire qu’on se fasse un petit coucou : chez nous, on privilégie le lien social !</p>
                            <p>Si vous n’avez pas forcément une idée précise en tête, pas de panique, nos designers sont là pour vous conseiller. Pour ce faire, remplissez seulement le formulaire suivant et nous reviendrons vers vous dans les plus brefs délais :)</p>
                        </div>
                    </div>
                </section>
            </section>
            <Footer></Footer>
        </>
    );
}

export default personnalisation