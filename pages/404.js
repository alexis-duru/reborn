import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link';
import Head from 'next/head'

const error = () => {

    return (
        <>
            <Head>
                <title>Erreur 404 - reborn</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="robots" content="noindex" />
            </Head>
            <Navbar></Navbar>
            <section className="validation-mail">
                <div className="container">
                    <div className="mail-confirm">
                        <h1>404</h1>
                        <h2>Désolé ! Nous n’avons pas trouvé le contenu que vous recherchez. Vous pouvez revenir à l’accueil à l’aide du bouton ci-dessous.</h2>
                        <div className='btn__container'><Link className="btn primary-btn" href="/">Retour à l'accueil</Link></div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default error;