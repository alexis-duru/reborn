import React from 'react';
import Navbar from '../components/Navbar';
import conceptImage from '../public/assets/img/reborn-background.webp'
import Image from 'next/image'

const concept = () => {
    return (
        <>
            <Navbar></Navbar>
            <section className="section-colored concept">
                <div className="container">
                    <div className='concept__background__title'>Reborn</div>
                    <h1>Notre <span className='span-font'>Concept</span></h1>
                    <div className='concept__subcontainer'>
                        <div className='concept__subcontainer-left'>
                            <div><p>Since 14 nov. 2022</p></div>
                            <div><p>Projet hackathon</p></div>
                        </div>
                        <div className='concept__subcontainer-right'>
                            <h2>Notre concept ? </h2>
                            <p>Il est simple : donner une seconde vie à vos objets et ceux qu’on nous donne (on accepte les dons ici !).
                                Fondée en 2022 par un petit groupe d’étudiants soucieux de participer à l'élaboration d’un nouveau mode de vie plus responsable, Reborn est une marque locale familiale et eco-friendly.
                            </p>
                        </div>
                    </div>
                    <div className='concept__subcontainer'>
                        <div className='concept__subcontainer-left2'>
                            <h2>Nos valeurs</h2>
                            <p>Basé à Bordeaux, notre atelier de réparation fourmille toute la semaine de 8h à 18h (généralement plus parce qu’on ne sait pas s’arrêter) pour donner une seconde vie à vos objets cassés. Comment ? Pas en les réparant à l’identique, ce ne serait pas drôle ! Mais plutôt en leur apportant un petit grain de folie comme un pied différent des 3 autres ou une anse orange fluo !
                                Bref, pas besoin d’en dire plus, nos créations sont juste en dessous, on vous laisse jeter un coup d'œil et vous faire une idée par vous-même…
                            </p>
                        </div>
                        <div className='concept__subcontainer-right'>
                            <Image src={conceptImage} alt=''></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default concept