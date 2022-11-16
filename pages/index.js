import Layout from '../components/Layout'
import NavbarHome from '../components/NavbarHome'
import Footer from '../components/Footer'
import Splashscreen from '../components/Splashscreen';
import Cursor from '../components/Cursor';
import Image from 'next/image'
import { useEffect } from 'react';
import reborn from '../public/assets/img/home/home.gif';
import donsIcon from '../public/assets/icons/reborn-dons.svg'

export default function Home() {
  // function swap() {
  //   gsap.registerEffect({
  //     name: "swapText",
  //     effect: (targets, config) => {
  //       let tl = gsap.timeline({ delay: config.delay });
  //       tl.to(targets, { opacity: 0, duration: config.duration / 2 });
  //       tl.add(() => targets[0].innerText = config.text);
  //       tl.to(targets, { opacity: 1, duration: config.duration });
  //       return tl;
  //     },
  //     defaults: { duration: 1 },
  //     extendTimeline: true
  //   });
  //   var tl = gsap.timeline({ repeat: -1 });
  //   tl.swapText(".subtext", { text: "THE SECOND INFO TEXT 1 IS THIS ONE", delay: 2 })
  //     .swapText(".subtext", { text: "AND THE THIRD INFO TEXT IS THIS", delay: 2 })
  //     .swapText(".subtext", { text: "THIS IS INFO TEXT 1", delay: 2 }); // back to the start
  // }

  // useEffect(() => {
  //   swap()
  // }, [])
  function parallax() {
    const body = document.querySelector('body');
    body.classList.add('home')
    const bg = document.querySelector('.header_bg');
    window.addEventListener('scroll', () => {
      let scroll = window.scrollY;
      bg.style.top = scroll * 0.5 + 'px';
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
        <section className='header'>
          <div className='header__container'>
            <div className='header__content'>
              <Image src={reborn} alt="fleche" className="reborn-logo" />
            </div>
          </div>
          <div className='header_bg'></div>
        </section>

        <section className="section-colored dons">
          <div className="container">
            <h1>Notre<span className='span-font'> Concept</span></h1>
            <div className='dons__content'>
              <p>Parce qu'on nous met pas à la poubelle quand on se casse une jambe. Reborn retape les objets un peu usées par la vie</p>
              <div className='btn__container'><Link href="/concept" className="btn primary-btn send-btn">
                Lire plus
              </Link></div>
            </div>
          </div>
        </section>

        <section className="section-colored dons">
          <div className="container">
            <h1>Les<span className='span-font'> petits nouveaux</span></h1>
            <div className='dons__content'>
              <p>Chez Reborn, nous souhaitons permettre à chacun d'avoir des objets uniques, sans se ruiner et sans acheter du neuf !</p>
              <p>C'est pour cela que nous vous proposons de réparer vos objets d'une manière singulière ou d'acheter des pièces par nos soins à partir de vos dons.</p>
            </div>
          </div>
        </section>


        <section className="section-colored dons">
          <div className="container">
            <h1>Fair un<span className='span-font'> don</span></h1>
            <div className='dons__content'>
              <div className='dons__icon__container'> <Image src={donsIcon} alt='Icon de dons'></Image></div>
              <p>Vous avez sans doute déjà vu nos équipes avec leur vélos cargo sillonner Bordeaux avec le sourire aux lèvres… c’est normal, on est toujours plus étonné par votre générosité ! Du coup, c’est tout simple, soit vous nous déposez les objets dont vous voulez vous débarrasser à notre atelier directement (ici), soit on vient les chercher chez vous, avec nos vélos cargo ou notre super camion électrique (uniquement à Bordeaux).</p>
              <div className='btn__container'><Link href="/concept" className="btn primary-btn send-btn">
                Lire plus
              </Link></div>
            </div>
          </div>
        </section>

        <section className="section-colored dons">
          <div className="container">
            <h1>Les<span className='span-font'> actus</span></h1>
            <div className='dons__content'>
              <p>Vous avez sans doute déjà vu nos équipes avec leur vélos cargo sillonner Bordeaux avec le sourire aux lèvres… c’est normal, on est toujours plus étonné par votre générosité ! Du coup, c’est tout simple, soit vous nous déposez les objets dont vous voulez vous débarrasser à notre atelier directement (ici), soit on vient les chercher chez vous, avec nos vélos cargo ou notre super camion électrique (uniquement à Bordeaux).</p>
            </div>
          </div>
        </section>

        <Footer></Footer>
      </Layout>
    </>
  )
}
