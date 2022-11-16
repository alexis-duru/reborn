import React from 'react';

const contact = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div class="page__banner">
                        <h1>Contactez-nous !</h1>
                        <span><a href="/">Accueil</a> » Contactez-nous</span>
                    </div>
                </div>
                <section class="contact__container">
                    <div className='container-row'>
                        <section class="contact__form__container">
                            <h2>Contactez-nous dès maintenant !</h2>
                            <p class="content__primary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sed perspiciatis facere,
                                similique
                                quas doloremque reiciendis consequuntur quis maiores dolor possimus ipsum aperiam ratione
                                repudiandae molestiae magnam nulla repellat animi!
                            </p>
                            <p class="content__primary"><strong>*</strong> = Champs obligatoire.
                            </p>
                            <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" class="contact__form" action="/validation-mail"><input type="hidden" name="form-name" value="contact"></input>
                                <div><label for="firstname">Prénom <strong>*</strong></label> <input id="firstname" name="firstname" placeholder="Votre prénom" required=""></input></div>
                                <div><label for="lastname">Nom <strong>*</strong></label> <input id="lastname" name="lastname" placeholder="Votre nom" required=""></input></div>
                                <div><label for="email">Email <strong>*</strong></label> <input id="email" name="email" placeholder="Ex : exemple@gmail.com" required=""></input></div>
                                <div><label for="phone">Téléphone</label> <input id="phone" name="phone" placeholder="Ex : 05 05 05 05 05"></input></div>
                                <div><label for="message">Message <strong>*</strong></label> <textarea rows="4" id="message" name="message" placeholder="Votre message" required=""></textarea></div>
                                <div><label for="rgpd"><input type="checkbox" id="rgpd" name="Gestion des données personnelles" required=""></input>
                                    En cochant cette case vous acceptez que vos coordonnées soient
                                    utilisées pour vous répondre.
                                    <a href="/politique-de-confidentialite"> Notre politique de confidentialité</a>. <strong>*</strong></label>
                                </div>
                                <div class="form__send"><button type="submit" role="button" class="btn primary-btn send-btn">
                                    Envoyer
                                </button></div>
                            </form>
                        </section>
                        <section class="contact__social__container">
                            <div role="img" aria-label="Photographie d'un pot de fleur'" class="contact__social-1">
                                <h2>Rejoignez-nous sur Facebook !</h2>
                                <a href="https://www.facebook.com/" target="_blank" title="Lien vers la page Facebook de FlowerPot" class="btn__secondary send-btn">Facebook</a>
                            </div>
                            <div role="img" aria-label="Photographie d'un pot de fleur" class="contact__social-2">
                                <h2>Rejoignez-nous sur Instagram !</h2>
                                <a href="https://www.instagram.com/" target="_blank" title="Lien vers la page Instagram de FlowerPot" class="btn__secondary send-btn">Instagram</a>
                            </div>
                        </section>
                    </div>
                </section>
            </section>
        </>
    );
}

export default contact