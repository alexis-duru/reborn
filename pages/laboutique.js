import React from 'react';
import AllProducts from '../components/AllProducts';
import Image from 'next/image'

const laboutique = () => {

    if (typeof window !== "undefined") {
        let images = [...document.querySelectorAll('.img')];
    
        images.forEach((img, idx) => {
            img.style.backgroundImage = `url(../../assets/img/chaises/${idx+1}.png)`
        })
    }



    return (
        <>
            <AllProducts></AllProducts>
        </>
    );
}

export default laboutique;