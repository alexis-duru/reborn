import Head from 'next/head';
import '../styles/globals.scss';


function MyApp({ title, Component, pageProps }) {

  return (
    <>
        <Head>
        <title>Reborn - donner une seconde vie à vos objets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Reborn - donner une seconde vie à vos objets" key="title" />
        <meta property="og:description" content="Chez Reborn, nous souhaitons permettre à chacun d’avoir des objets uniques, sans se ruiner et sans acheter du neuf" />
        <meta name='description' content='Chez Reborn, nous souhaitons permettre à chacun d’avoir des objets uniques, sans se ruiner et sans acheter du neuf' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp