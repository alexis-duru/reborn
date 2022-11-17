import Layout from '../components/Layout'
import NavbarHome from '../components/NavbarHome'
import Footer from '../components/Footer'
import Splashscreen from '../components/Splashscreen';
import Cursor from '../components/Cursor';
import Image from 'next/image'
import { useEffect } from 'react';
import reborn from '../public/assets/img/home/home.gif';
import donsIcon from '../public/assets/icons/reborn-dons.svg'
import Link from 'next/link';
import FeaturedProducts from '../components/FeaturedProducts';
import Actualite1 from '../public/assets/img/home/reborn-actualite1.webp'
import Actualite2 from '../public/assets/img/home/reborn-actualite2.webp'

export default function Home() {
  function parallax() {
    const bg = document.querySelector(".header_bg");
    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;
      bg.style.top = scroll * 0.5 + "px";
      bg.style.scale = 1 + (scroll * 0.0005);
    })
  }
  useEffect(() => {
    parallax();
  }, [])

  
  return (
    <>
      <Layout>
        <Cursor />
        <Splashscreen />
        <NavbarHome></NavbarHome>
        <div className='home'>
          <section className="header">
            <div className="header__container">
              <div className="header__content">
                <Image src={reborn} alt="Logo reborn" className="reborn-logo" loading="eager" width={400} />
              </div>
            </div>
            <div className="header_bg"></div>
          </section>

          <section className="section-colored homepage__section">
            <div className="container">
              <h1>Notre<span className='span-font'> Concept</span></h1>
              <div className='homepage__content'>
                <p>Parce qu'on nous met pas à la poubelle quand on se casse une jambe. Reborn retape les objets un peu usées par la vie</p>
                <div className='btn__container'><Link href="/concept" className="btn primary-btn send-btn">
                  Lire plus
                </Link></div>
              </div>
            </div>
          </section>

          <section className="section-colored homepage__section">
            <div className="container">
              <h1>Les<span className="span-font"> petits nouveaux</span></h1>
              <div className="homepage__content content">
                <p>Chez Reborn, nous souhaitons permettre à chacun d'avoir des objets uniques, sans se ruiner et sans acheter du neuf !</p>
                <p>C'est pour cela que nous vous proposons de réparer vos objets d'une manière singulière ou d'acheter des pièces par nos soins à partir de vos dons.</p>
              </div>
              <FeaturedProducts></FeaturedProducts>
            </div>
          </section>


          <section className="section-colored homepage__section">
            <div className="container">
              <h1>Fair un<span className='span-font'> don</span></h1>
              <div className="dons__content content">
                <div className="dons__icon__container"> <Image src={donsIcon} alt="Icon de dons"></Image></div>
                <p>Vous avez sans doute déjà vu nos équipes avec leur vélos cargo sillonner Bordeaux avec le sourire aux lèvres… c’est normal, on est toujours plus étonné par votre générosité ! Du coup, c’est tout simple, soit vous nous déposez les objets dont vous voulez vous débarrasser à notre atelier directement (ici), soit on vient les chercher chez vous, avec nos vélos cargo ou notre super camion électrique (uniquement à Bordeaux).</p>
                <div className='btn__container'><Link href="/concept" className="btn primary-btn send-btn">
                  Lire plus
                </Link></div>
              </div>
            </div>
          </section>

          <section className="section-colored homepage__section">
            <div className="container">
              <h1>Les<span className="span-font"> actus</span></h1>
              <div className="homepage__content content">
                <p>Vous avez sans doute déjà vu nos équipes avec leur vélos cargo sillonner Bordeaux avec le sourire aux lèvres… c’est normal, on est toujours plus étonné par votre générosité ! Du coup, c’est tout simple, soit vous nous déposez les objets dont vous voulez vous débarrasser à notre atelier directement (ici), soit on vient les chercher chez vous, avec nos vélos cargo ou notre super camion électrique (uniquement à Bordeaux).</p>
              </div>
              <div className='actus__container'>
                <div className='actu__container'>
                  <Image src={Actualite1} alt="Photographie brocante des Quinquonces"></Image>
                  <p className='actu__content'>Les 25 et 26 novembre, c’est la brocante des Quinquonces !
                    L’équipe Reborn aura un stand autour duquel on pourra discuter et refaire le monde autour de nos toutes dernières créations. Vous aurez aussi la possibilité d’y réparer et personnaliser vos objets fraîchement chinés dans une ambiance conviviale et créative. On vous attend de pied ferme !
                  </p>
                </div>
                <div className='actu__container'>
                  <Image src={Actualite2} alt="Photographie plaque atelier reborn"></Image>
                  <p className='actu__content'>Les 3 et 4 décembre, c'est la fête chez Reborn ! On vous ouvre nos portes pour que vous puissiez découvrir les métiers associés à la réparation et échanger avec nos équipes sur leur rôle au sein de l'entreprise. On vous attend nombreux !
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>

        <Footer></Footer>
      </Layout>
    </>
  )
}
