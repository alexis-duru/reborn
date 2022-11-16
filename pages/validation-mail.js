import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import rebornMailSucess from '../public/assets/icons/reborn-mail-sucess.svg'
import Image from 'next/image'

const validationMail = () => {
    return (
        <>
            <Navbar></Navbar>
            <section className="validation-mail">
                <div className="container">
                    <div className="mail-confirm">
                        <Image src={rebornMailSucess} alt='Icône mail'></Image>
                        <h2>Votre mail à bien été envoyé, nous vous répondrons dans les plus brefs délais.</h2>
                        <div className='btn__container'><a className="btn primary-btn" href="/">Retour à l'accueil</a></div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default validationMail