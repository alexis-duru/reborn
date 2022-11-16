
import { useAppContext } from '../AppContext';
import Image from 'next/image'
import logo from '../public/assets/img/logo-reborn.svg'

export default function Header() {
    const { i18n } = useAppContext();

    return (
        <>
            <section className='navbar'>
                <div className='navbar__container'>
                    <a href="index.html">
                        <Image className="navbar__image" src={logo} alt='chair'></Image>
                    </a>
                    <a className="navbar__menu">Menu</a>
                </div>
            </section>
        </>
    )
}
