import React from 'react';
import Link from 'next/link';

const personnalisation = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="page__banner">
                        <h1>Personnalisation !</h1>
                        <span><Link href="/">Accueil</Link> » Personnalisation</span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default personnalisation