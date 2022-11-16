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

                        <input type="checkbox" id="burger-toggle" />
                        <label htmlFor="burger-toggle" class="burger-menu">
                            <Link className="navbar__home__menu">Menu</Link>
                        </label>
                        <div class="menu">
                            <div class="menu-inner">
                                <ul class="menu-nav">
                                    <li class="menu-nav-item">
                                        <Link class="menu-nav-link" href="#">
                                            <span class="barre"></span>
                                            <span>
                                                <div>Concept</div>
                                            </span>
                                        </Link>
                                    </li>

                                    <li class="menu-nav-item">
                                        <Link class="menu-nav-link" href="#">
                                            <span class="barre"></span>
                                            <span>
                                                <div>Boutique</div>
                                            </span>
                                        </Link>
                                    </li>

                                    <li class="menu-nav-item">
                                        <Link class="menu-nav-link" href="#">
                                            <span class="barre"></span>
                                            <span>
                                                <div>Personnalisation</div>
                                            </span>
                                        </Link>
                                    </li>

                                    <li class="menu-nav-item">
                                        <Link class="menu-nav-link" href="#">
                                            <span class="barre"></span>
                                            <span>
                                                <div>Don</div>
                                            </span>
                                        </Link>
                                    </li>

                                    <li class="menu-nav-item">
                                        <Link class="menu-nav-link" href="#">
                                            <span class="barre"></span>
                                            <span>
                                                <div>Contact</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                                <div class="gallery">
                                    <div class="images">
                                        <Link class="image-link" href="#">
                                            <div class="image" data-label="Star">
                                                {/* <img src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg" alt=""> */}

                                            </div>
                                        </Link>
                                        <Link class="image-link" href="#">
                                            <div class="image" data-label="Sun">
                                                {/* <img src="https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg" alt=""> */}

                                            </div>
                                        </Link>
                                        <Link class="image-link" href="#">
                                            <div class="image" data-label="Tree">
                                                {/* <img src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg" alt=""> */}

                                            </div>
                                        </Link>
                                        <Link class="image-link" href="#">
                                            <div class="image" data-label="Sky">
                                                {/* <img src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg" alt="">
                            */}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link href="/">
                            <Image className="navbar__home__image" src={logo} alt='Logo reborn'></Image>
                        </Link>
                    </div>
                    <div>
                        <div className="wrapper-city">
                            <svg id="cercleun" width="197" height="63" viewBox="0 0 197 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M188.936 4.32428C158.63 4.59437 96.0085 10.9392 80.0152 13.7843C64.0224 16.6294 2.57802 28.4617 2.55497 40.3523C2.53192 52.2432 45.3636 62.5128 98.9567 58.1926C152.55 53.8725 194.886 39.0847 194.883 27.3773C194.879 15.6699 159.616 6.40391 114.823 4.68684C70.0298 2.96977 -12.1076 14.1799 12.6286 36.6155" stroke="#F6B1CF" strokeWidth="1.55526" />
                            </svg>
                            {/* <Image className="circle" src={circle} alt='circle'></Image> */}
                            <Link className="navbar__home__menu">Bordeaux</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
