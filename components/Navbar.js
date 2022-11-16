import Image from 'next/image'
import logo from '../public/assets/img/logo-reborn.svg'
import panier from '../public/assets/icons/reborn-panier.svg'

export default function Header() {
    return (
        <>
            <section className='navbar'>
                <div className='navbar__container'>
                    <div>
                        <a className="navbar__menu">Menu</a>
                    </div>
                    <div>
                        <a href="/">
                            <Image className="navbar__image" src={logo} alt='chair'></Image>
                        </a>
                    </div>
                    <div>
                        <a className="navbar__menu">Bordeaux</a>
                        <a className="navbar__menu">Compte</a>
                        <a className="navbar__menu">Panier  <Image className="" src={panier} alt='panier'></Image></a>
                    </div>
                </div>
            </section>
        </>
    )
}
