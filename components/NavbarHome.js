import Image from 'next/image'
import logo from '../public/assets/img/logo-reborn.svg'
import { useEffect } from "react";

export default function Header() {
    function bg() {
        const header = document.querySelector('.navbar__home');
        window.addEventListener('scroll', () => {
            let scroll = window.scrollY;
            if (scroll > 200) {
                header.classList.add('bg')
            }
            else {
                header.classList.remove('bg')
            }
        })
    }
    useEffect(() => {
        bg();
    }, [])
    return (
        <>
            <section className='navbar__home'>
                <div className='navbar__home__container'>
                    <div>
                        <a className="navbar__home__menu">Menu</a>
                    </div>
                    <div>
                        <a href="/">
                            <Image className="navbar__home__image" src={logo} alt='chair'></Image>
                        </a>
                    </div>
                    <div>
                        <a className="navbar__home__menu">Bordeaux</a>
                    </div>
                </div>
            </section>
        </>
    )
}
