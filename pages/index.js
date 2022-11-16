import Layout from '../components/Layout'
import Image from 'next/image'
import placeholder from '../public/assets/img/placeholder.png'
import NavbarHome from '../components/NavbarHome'
import Splashscreen from '../components/Splashscreen';
import Cursor from '../components/Cursor';
import { useEffect } from 'react';
import ParallaxSection from '../components/parallaxSection';

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
        </section>
        <ParallaxSection
          title="Test"
          buttonLink="test"
          imgRef1="test1.jpg"
          imgRef2="test2.jpg"
        />
        <section className="about" id="about">
          <div className="container-row">
            <div className="about__company-content">
              <h2>Lorem ipsum dolor set
                <strong className="strong-green">consecutir</strong> det.
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, eget penatibus vel lorem arcu nam a ac vulputate. Nunc ante quis in vitae porttitor a semper amet. Lectus aliquam at donec purus purus, diam felis ac. Convallis faucibus lectus etiam enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, eget penatibus vel lorem arcu nam a ac vulputate.</p>
              <div><a className="btn primary-btn" href="/nos-produits.html">Nos produits</a></div>
            </div>
            <Image className="about__company-img" src={placeholder} alt='chair'></Image>
          </div>
          <div className="container-row">
            <Image className="about__company-img" src={placeholder} alt='chair'></Image>
            <div className="about__product-content">
              <h2>Lorem ipsum dolor set
                <strong className="strong-green">consecutir</strong> det.
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur <strong>adipiscing elit</strong>. Fermentum, eget penatibus
                vel lorem arcu nam
                a ac vulputate. Nunc ante quis in vitae porttitor a semper amet. Lectus aliquam at donec purus
                purus, diam felis ac. Convallis faucibus lectus etiam enim. Nunc ante quis in vitae porttitor a
                semper amet. Lectus aliquam at <strong>donec purus purus</strong>, diam felis ac. Convallis faucibus
                lectus etiam
                enim.Nunc ante quis in vitae porttitor a semper amet. Lectus aliquam at donec purus purus, diam
                felis ac. Convallis faucibus lectus etiam enim.</p>
              <div><a className="btn primary-btn" href="/nos-produits.html">Nos produits</a></div>
            </div>
          </div>
        </section>
        <section className="contact__banner">
          <div className="container-row">
            <div className="banner">
              <h3>Vous souhaitez plus <strong className="strong-green">d’informations</strong> sur notre démarche ?</h3>
              <a className="btn primary-btn" href="/contact.html">Contactez-nous</a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
