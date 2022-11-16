import Layout from '../components/Layout'
import { useAppContext } from '../AppContext';
import Image from 'next/image'
import placeholder from '../public/assets/img/placeholder.png'
import logo from '../public/assets/img/logo-reborn.svg'
import Splashscreen from '../components/Splashscreen';
import Cursor from '../components/Cursor';

export default function Home() {
  const { i18n } = useAppContext();


  return (
    <>
      <Layout>
        <Cursor />
        <Splashscreen />

        <section className='header'>
          <section className='navbar__header'>
            <div className='navbar__header__container'>
              <a href="index.html">
                <Image className="navbar__header__image" src={logo} alt='chair'></Image>
              </a>
              <a class="navbar__header__menu">Menu</a>
            </div>
          </section>
          <div className='header__container'>
            <div className='header__content'>
              <h1>Optez pour l'esprit <span>Reborn</span></h1>
              <a href="#about">
                <button class="btn btn--outline" type="button">
                  <span class="btn__text">En savoir plus</span>
                </button>
              </a>
            </div>
          </div>
        </section>
        <section class="about" id="about">
          <div class="container-row">
            <div class="about__company-content">
              <h2>Lorem ipsum dolor set
                <strong class="strong-green">consecutir</strong> det.
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, eget penatibus vel lorem arcu nam a ac vulputate. Nunc ante quis in vitae porttitor a semper amet. Lectus aliquam at donec purus purus, diam felis ac. Convallis faucibus lectus etiam enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, eget penatibus vel lorem arcu nam a ac vulputate.</p>
              <div><a class="btn primary-btn" href="/nos-produits.html">Nos produits</a></div>
            </div>
            <Image className="about__company-img" src={placeholder} alt='chair'></Image>
          </div>
          <div class="container-row">
            <Image className="about__company-img" src={placeholder} alt='chair'></Image>
            <div class="about__product-content">
              <h2>Lorem ipsum dolor set
                <strong class="strong-green">consecutir</strong> det.
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur <strong>adipiscing elit</strong>. Fermentum, eget penatibus
                vel lorem arcu nam
                a ac vulputate. Nunc ante quis in vitae porttitor a semper amet. Lectus aliquam at donec purus
                purus, diam felis ac. Convallis faucibus lectus etiam enim. Nunc ante quis in vitae porttitor a
                semper amet. Lectus aliquam at <strong>donec purus purus</strong>, diam felis ac. Convallis faucibus
                lectus etiam
                enim.Nunc ante quis in vitae porttitor a semper amet. Lectus aliquam at donec purus purus, diam
                felis ac. Convallis faucibus lectus etiam enim.</p>
              <div><a class="btn primary-btn" href="/nos-produits.html">Nos produits</a></div>
            </div>
          </div>
        </section>
        <section class="contact__banner">
          <div class="container-row">
            <div class="banner">
              <h3>Vous souhaitez plus <strong class="strong-green">d’informations</strong> sur notre démarche ?</h3>
              <a class="btn primary-btn" href="/contact.html">Contactez-nous</a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
