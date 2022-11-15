import { useAppContext } from '../AppContext';

export default function Footer( ) {
  const { i18n } = useAppContext();

  const date = new Date();

  return (
    <footer className="flex flex-col items-center gap-3 justify-between border-t mt-8 text-sm text-gray-300 pt-4 md:flex-row md:gap-0 text-center print:hidden">
      <div className="left">
        c.
        {' '}
        {date.getFullYear()}
        {' '}
        - Duru Alexis (Design :
        {' '}
        )
      </div>
    </footer>
  )
}
