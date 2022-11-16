import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Link from 'next/link';

const contact = () => {
    return (
        <>
            <Navbar></Navbar>
            <section className="section-colored contact">
                <section className="contact__container">
                    <div className='container'>
                        <section className="contact__form__container">
                            <h1>Un <span className='span-font'>don ?</span> Une <span className='span-font'>question ?</span></h1>
                            <p className="content__primary">
                                Pour nous contacter, rien de plus simple, remplissez ce formulaire juste en dessous mais psssit… attendez !! Quand vous remplissez ce formulaire, vous nous envoyez en fait un mail et un mail, c’est en moyenne <strong>4g de CO2</strong> émis pour chaque envoi… du coup, on vous demande de vraiment réfléchir à votre demande avant de nous l’envoyer et de <strong>privilégier les sollicitations par téléphone</strong> qu’on vous remet juste ici : 05 97 45 35 33 ou 06 79 54 53 44. Merci !
                            </p>
                            <p className="content__primary"><strong>*</strong> = Champs obligatoire.
                            </p>
                            <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" className="contact__form" action="/validation-mail"><input type="hidden" name="form-name" value="contact"></input>
                                <div><label for="firstname">Prénom <strong>*</strong></label> <input id="firstname" name="firstname" placeholder="Votre prénom" required=""></input></div>
                                <div><label for="lastname">Nom <strong>*</strong></label> <input id="lastname" name="lastname" placeholder="Votre nom" required=""></input></div>
                                <div><label for="email">Email <strong>*</strong></label> <input id="email" name="email" placeholder="Ex : exemple@gmail.com" required=""></input></div>
                                <div><label for="phone">Téléphone</label> <input id="phone" name="phone" placeholder="Ex : 05 05 05 05 05"></input></div>
                                <div><label for="message">Message <strong>*</strong></label> <textarea rows="4" id="message" name="message" placeholder="Votre message" required=""></textarea></div>
                                <div><label for="rgpd"><input type="checkbox" id="rgpd" name="Gestion des données personnelles" required=""></input>
                                    En cochant cette case vous acceptez que vos coordonnées soient
                                    utilisées pour vous répondre.
                                    <Link href="/politique-de-confidentialite"> Notre politique de confidentialité</Link>. <strong>*</strong></label>
                                </div>
                                <div className="form__send"><button type="submit" role="button" className="btn primary-btn send-btn">
                                    Envoyer
                                </button></div>
                            </form>
                        </section>
                        <section className='contact__notification'>
                            <p>Reborn a également pris le parti pris de ne pas être sur les réseaux sociaux, toujours pour limiter au maximum son empreinte carbone. C’est un parti pris fort et pas forcément évident dans notre société actuelle, mais nous sommes prêts à en assumer les conséquences pour inciter les autres à faire de même :)
                                Toutes nos informations sont donc à retrouver sur notre site, directement sur la page d’accueil.
                            </p>
                        </section>
                    </div>
                </section>
            </section>
            <Footer></Footer>
        </>
    );
}

export default contact