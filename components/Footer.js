import phoneIcone from '../public/assets/icons/reborn-telephone.svg'
import adressIcone from '../public/assets/icons/reborn-adresse.svg'
import Image from 'next/image'
import Link from 'next/link';

export default function Footer() {

  return (
    <>
      <footer>
        <div className='footer_infos'>
          <div className='footer_info'>
            <Image src={adressIcone} alt='Icône localisation'></Image>
            <Link href='https://goo.gl/maps/gh4vPVGSrjoNJNnn6' target='_blank'>3 rue Surcouf<br></br>33000 Bordeaux</Link>
          </div>
          <div className='footer_info'>
            <Image src={phoneIcone} alt='Icône téléphone'></Image>
            <div>
              <p>05 97 45 35 33</p>
              <p>06 79 54 53 44</p>
            </div>
          </div>
        </div>
        <div className='credits'>
          <p>2022 - REBORN - TOUS DROITS RESERVES</p>
          <Link href='/mentions-legales'>Mentions légales</Link>
          <Link href='/politique-de-confidentialite'>Politique de confiendtialité</Link>
        </div>
      </footer>
    </>
  )
}
