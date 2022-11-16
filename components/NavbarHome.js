import Image from 'next/image'
import logo from '../public/assets/img/logo-reborn.svg'
import { useEffect } from "react";
// import circle from '../public/assets/img/circle.svg'

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
                        <a className="navbar__home__menu">Menu</a>
                    </div>
                    <div>
                        <a href="/">
                            <Image className="navbar__home__image" src={logo} alt='Logo reborn'></Image>
                        </a>
                    </div>
                    <div>
                        <div className="wrapper-city">
                            <svg id="cercleun" width="197" height="63" viewBox="0 0 197 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M188.936 4.32428C158.63 4.59437 96.0085 10.9392 80.0152 13.7843C64.0224 16.6294 2.57802 28.4617 2.55497 40.3523C2.53192 52.2432 45.3636 62.5128 98.9567 58.1926C152.55 53.8725 194.886 39.0847 194.883 27.3773C194.879 15.6699 159.616 6.40391 114.823 4.68684C70.0298 2.96977 -12.1076 14.1799 12.6286 36.6155" stroke="#F6B1CF" strokeWidth="1.55526" />
                            </svg>
                            {/* <Image className="circle" src={circle} alt='circle'></Image> */}
                            <a className="navbar__home__menu">Bordeaux</a>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
