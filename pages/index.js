import Layout from '../components/Layout'
import { useAppContext } from '../AppContext';
import Languages from '../components/Languages';
import Footer from '../components/Footer';
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
          <div className='container'>
            <div className='header__content'>
              <h1>
                Lorem ipsum <span className="bold-txt">dolor</span> set <span className="bold-txt">consecutir</span>
                det.
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, eget penatibus vel lorem arcu
                nam a ac vulputate. Nunc ante quis in vitae porttitor a semper amet. Lectus aliquam at donec
                purus purus, diam felis ac. Convallis faucibus lectus etiam enim.</p>
              <div><a className="btn primary-btn" href="#about">Découvrir</a></div>
            </div>
            <img className='header__img'></img>
          </div>
        </section>
        <section className='about'>
          <div className='container'>
            <div className='about__content'>
              <h1>
                Lorem ipsum <span className="bold-txt">dolor</span> set <span className="bold-txt">consecutir</span>
                det.
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, eget penatibus vel lorem arcu
                nam a ac vulputate. Nunc ante quis in vitae porttitor a semper amet. Lectus aliquam at donec
                purus purus, diam felis ac. Convallis faucibus lectus etiam enim.</p>
              <div><a className="btn primary-btn" href="#about">Découvrir</a></div>
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
