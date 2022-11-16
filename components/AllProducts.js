import React from 'react';
import Link from 'next/link';
import NavbarHome from '../components/NavbarHome';

const AllProducts = () => {

    if (typeof window !== "undefined") {
        let images = [...document.querySelectorAll('.img')];
    
        images.forEach((img, idx) => {
            img.style.backgroundImage = `url(../../assets/img/chaises/${idx+1}.png)`
        })
    }



    return (
        <>
        <NavbarHome></NavbarHome>
           <section id="laboutique">
                <div className="container-title">
                    <h1><span className="first-title">La</span><span className="second-title">Boutique</span></h1>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="wrapper-item">
                        <h2 className="product-number">Table</h2>
                            <Link href="/">
                                <div className="item">
                                    <div className="wrapper">
                                        <div className="img"></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className="wrapper-item">
                        <h2 className="product-number">Chaise</h2>
                            <Link href="/">
                                <div className="item">
                                    <div className="wrapper">
                                        <div className="img"></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className="wrapper-item">
                        <h2 className="product-number">Vases</h2>
                            <Link href="/">
                                <div className="item">
                                    <div className="wrapper">
                                        <div className="img"></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                
                </div>
            </section>
        </>
    );
}

export default AllProducts;