import Layout from '../components/Layout'
import Image from 'next/image'
import placeholder from '../public/assets/img/placeholder.png'
import NavbarHome from '../components/NavbarHome'
import Footer from '../components/Footer'
import Splashscreen from '../components/Splashscreen';
import Cursor from '../components/Cursor';
import { useEffect } from 'react';
//import gsap from "gsap"

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
              <h1>Re<span className='subtext'>born</span></h1>
            </div>
          </div>
          <div className='header_bg'></div>
        </section>

        <section class="home_about" id="about">
          <div class="about__company-content">
            <h2>Le <span className='subtext'>concept</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, eget penatibus vel lorem arcu nam a ac vulputate. Nunc ante quis in vitae porttitor a semper amet. Lectus aliquam at donec purus purus, diam felis ac. Convallis faucibus lectus etiam enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, eget penatibus vel lorem arcu nam a ac vulputate.</p>
            <div><a class="btn primary-btn" href="/nos-produits.html">Decouvrir le concept</a></div>
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
        <Footer></Footer>
      </Layout>
    </>
  )
}
