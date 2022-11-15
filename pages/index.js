import Layout from '../components/Layout'
import { useAppContext } from '../AppContext';
import Languages from '../components/Languages';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Home() {
  const { i18n } = useAppContext();


  return (
    <>
      <Layout>
        <section className='header'>
          <div className='container'>
            <div className='header__content'>
              <h1>
                Lorem ipsum <span class="bold-txt">dolor</span> set <span class="bold-txt">consecutir</span>
                det.
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, eget penatibus vel lorem arcu
                nam a ac vulputate. Nunc ante quis in vitae porttitor a semper amet. Lectus aliquam at donec
                purus purus, diam felis ac. Convallis faucibus lectus etiam enim.</p>
              <div><a class="btn primary-btn" href="#about">Découvrir</a></div>
            </div>
            <img className='header__img'></img>
          </div>
        </section>
        <section className='about'>
          <div className='container'>
            <div className='about__content'>
              <h1>
                Lorem ipsum <span class="bold-txt">dolor</span> set <span class="bold-txt">consecutir</span>
                det.
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, eget penatibus vel lorem arcu
                nam a ac vulputate. Nunc ante quis in vitae porttitor a semper amet. Lectus aliquam at donec
                purus purus, diam felis ac. Convallis faucibus lectus etiam enim.</p>
              <div><a class="btn primary-btn" href="#about">Découvrir</a></div>
            </div>
            <img className='about__img'></img>
          </div>
        </section>
        <Languages />
        <Footer />
      </Layout>
    </>
  )
}
