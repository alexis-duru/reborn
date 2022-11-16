import React from 'react';
import AllProducts from '../components/AllProducts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

const laboutique = () => {

    if (typeof window !== "undefined") {
        let images = [...document.querySelectorAll('.img')];

        images.forEach((img, idx) => {
            img.style.backgroundImage = `url(../../assets/img/chaises/${idx + 1}.png)`
        })
    }

    return (
        <>
            <Navbar></Navbar>
            <AllProducts></AllProducts>
            <Footer></Footer>
        </>
    );
}

export default laboutique;