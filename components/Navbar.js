import Image from 'next/image'
import logo from '../public/assets/img/logo-reborn.svg'
import { useEffect } from "react";
import Link from 'next/link';

export default function Header() {
    function bg() {
        const header = document.querySelector('.navbar__home');
        window.addEventListener('scroll', () => {
            let scroll = window.scrollY;
            if (scroll > 60) {
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
                        <Link className="navbar__home__menu">Menu</Link>
                    </div>
                    <div>
                        <Link href="/">
                            <Image className="navbar__home__image" src={logo} alt='Logo reborn'></Image>
                        </Link>
                    </div>
                    <div>
                        <p className="navbar__home__menu">Bordeaux</p>
                    </div>
                </div>
            </section>
        </>
    )
}
