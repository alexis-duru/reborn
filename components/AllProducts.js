import React from 'react';

const AllProducts = () => {

    return (
        <>
            <section id="laboutique">
                <div className="container-title">
                    <h1>La <span className="span-font">Boutique</span></h1>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="wrapper-item">
                            <h2 className="product-number">Chaises</h2>
                            <a href="/produits/chaises">
                                <div className="item">
                                    <div className="wrapper">
                                        <div className="img-boutique img-chaises"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="wrapper-item">
                            <h2 className="product-number">Tables</h2>
                            <a>
                                <div className="item">
                                    <div className="wrapper">
                                        <div className="img-boutique img-tables"></div>
                                    </div>
                                </div>
                            </a>
                            <p className='card__warning'>Aucune tables disponibles</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="wrapper-item">
                            <h2 className="product-number">Vases</h2>
                            <a>
                                <div className="item">
                                    <div className="wrapper">
                                        <div className="img-boutique img-vases"></div>
                                    </div>
                                </div>
                            </a>
                            <p className='card__warning'>Aucun vases disponibles</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default AllProducts;