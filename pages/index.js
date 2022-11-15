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
          <Header />
            <Languages />
            <Footer />
      </Layout>
    </>
  )
}
