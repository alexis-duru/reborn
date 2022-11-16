import React from 'react';
import Navbar from '../components/Navbar';

const concept = () => {
    return (
        <>
            <Navbar></Navbar>
            <section className="section">
                <div className="container">
                    <div class="page__banner">
                        <h1>Le concept</h1>
                        <span><a href="/">Accueil</a> » Concept</span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default concept