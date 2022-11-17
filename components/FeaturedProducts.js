import Link from 'next/link';
import React from 'react';

const FeaturedProducts = () => {

    return (
        <>
            <section id="featuredProducts" className='featured__products'>
                <div className="container">
                    <div className="card">
                        <div className="wrapper-item">
                            <h2 className="featured__product-number">N°1</h2>
                            <Link href="/produits/chaises/chaise-1">
                                <span className='hidden'>Lien vers le produit nouveauté 1</span>
                                <div className="item">
                                    <div className="wrapper">
                                        <div className="featured__products-img featured__product-1"></div>
                                    </div>
                                </div>
                            </Link>
                            <div>
                                <div className='products__infos'>
                                    <p>Tables N°1</p>
                                    <p>50€</p>
                                </div>
                                <p>Pied de métal</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="wrapper-item">
                            <h2 className="featured__product-number">N°2</h2>
                            <Link href="/produits/chaises/chaise-2">
                                <span className='hidden'>Lien vers le produit nouveauté 1</span>
                                <div className="item">
                                    <div className="wrapper">
                                        <div className="featured__products-img  featured__product-2"></div>
                                    </div>
                                </div>
                            </Link>
                            <div>
                                <div className='products__infos'>
                                    <p>Tables N°2</p>
                                    <p>60€</p>
                                </div>
                                <p>Pied de bois</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="wrapper-item">
                            <h2 className="featured__product-number">N°3</h2>
                            <Link href="/produits/chaises/chaise-3">
                                <span className='hidden'>Lien vers le produit nouveauté 1</span>
                                <div className="item">
                                    <div className="wrapper">
                                        <div className="featured__products-img  featured__product-3"></div>
                                    </div>
                                </div>
                            </Link>
                            <div>
                                <div className='products__infos'>
                                    <p>Tables N°3</p>
                                    <p>40€</p>
                                </div>
                                <p>Pied en plastique</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FeaturedProducts;