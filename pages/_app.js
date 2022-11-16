import Head from 'next/head';
import '../styles/globals.scss';


function MyApp({ title, Component, pageProps }) {

  return (
    <>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
    </>
  )
}

export default MyApp