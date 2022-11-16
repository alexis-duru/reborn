import { useAppContext } from '../AppContext';

export default function Footer() {
  const { i18n } = useAppContext();

  const date = new Date();

  return (
    <>
      <footer>
        <div className='footer_infos'>
          <div className='footer_info'>
            <i className='icon-location'></i>
            <p>3 rue Surcouf<br></br>33000 Bordeaux</p>
          </div>
          <div className='footer_info'>
            <i className='icon-phone'></i>
            <div>
              <a href='/'>05 97 45 35 33</a>
              <a href='/'>06 79 54 53 44</a>
            </div>
          </div>
        </div>
        <div className='credits'>
          <p>2022 - REBORN - TOUS DROITS RESERVES</p>
          <a href='/'>Mentions légales</a>
          <a href='/'>Cookies</a>
          <a href='/'>Protection des données</a>
          <a href='/'>Crédits</a>
        </div>
      </footer>
    </>
  )
}
