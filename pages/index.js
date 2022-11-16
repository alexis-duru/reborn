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
            <Image src={reborn} alt="fleche" class="reborn-logo" />
            </div>
          </div>
          <div className='header_bg'></div>
        </section>

        <section className="home_about" id="about">
          <div className="content">
            <h2>Le <span className='subtext'>concept</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, eget penatibus vel lorem arcu nam a ac vulputate. Nunc ante quis in vitae porttitor a semper amet. Lectus aliquam at donec purus purus, diam felis ac. Convallis faucibus lectus etiam enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, eget penatibus vel lorem arcu nam a ac vulputate.</p>
            <div><a className="btn primary-btn" href="/concept">Decouvrir le concept</a></div>
          </div>
        </section>
        <section className="home__products">
          <div className="content">
            <h2>Les <span className='subtext'>petits nouveaux</span></h2>
            <div><a className="btn primary-btn" href="/boutique">Voir les autres produits</a></div>
          </div>
        </section>
        <section className="home__donates">
          <div className="content">
            <h2>Faire un <span className='subtext'>don</span></h2>
            <div className='dons__icon__container'> <Image src={donsIcon} alt='Icon de dons'></Image></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, eget penatibus vel lorem arcu nam a ac vulputate. Nunc ante quis in vitae porttitor a semper amet. Lectus aliquam at donec purus purus, diam felis ac. Convallis faucibus lectus etiam enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, eget penatibus vel lorem arcu nam a ac vulputate.</p>
            <div><a className="btn primary-btn" href="/dons">Faire un don</a></div>

          </div>
        </section>
        <Footer></Footer>
      </Layout>
    </>
  )
}
