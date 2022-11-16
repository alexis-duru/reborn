import Image from 'next/image'
import logo from '../public/assets/img/logo-reborn.svg'

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
                    </div>
                </div>
            </section>
        </>
    )
}
