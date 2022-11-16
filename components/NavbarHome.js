import Image from 'next/image'
import logo from '../public/assets/img/logo-reborn.svg'
import panier from '../public/assets/icons/reborn-panier.svg'

export default function Header() {
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
                        <a className="navbar__home__menu">Compte</a>
                        <a className="navbar__home__menu">Panier  <Image className="" src={panier} alt='panier'></Image></a>
                    </div>
                </div>
            </section>
        </>
    )
}
