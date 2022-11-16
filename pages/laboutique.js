import React from 'react';
import AllProducts from '../components/AllProducts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Head from 'next/head'

const laboutique = () => {

    if (typeof window !== "undefined") {
        let images = [...document.querySelectorAll('.img')];

        images.forEach((img, idx) => {
            img.style.backgroundImage = `url(../../assets/img/chaises/${idx + 1}.png)`
        })
    }

    return (
        <>
            <Head>
                <title>La boutique - reborn</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="La boutique - reborn" key="title" />
                <meta property="og:description" content="Chez Reborn, nous souhaitons permettre à chacun d'avoir des objets uniques, sans se ruiner et sans acheter du neuf !" />
                <meta name='description' content="Chez Reborn, nous souhaitons permettre à chacun d'avoir des objets uniques, sans se ruiner et sans acheter du neuf !" />
            </Head>
            <Navbar></Navbar>
            <AllProducts></AllProducts>
            <Footer></Footer>
        </>
    );
}

export default laboutique;