import Image from 'next/image';
import logo from '../public/assets/img/logo-reborn.svg';

export default function Navigation() {
    return (
        <>
            <section className='navbar'>
                <div className='navbar__container'>
                    <a href="/">
                        <Image className="navbar__image" src={logo} alt='chair'></Image>
                    </a>
                    <a class="navbar__menu">Menu</a>
                </div>
            </section>
        </>
    )
}