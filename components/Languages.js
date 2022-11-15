import Image from 'next/image';
import Link from 'next/link';


export default function Languages() {
  return (
    <div className="flags_container">
      <Link href="/" locale="fr">
        <Image src="/assets/img/fr.png" alt="french flag" width={28} height={20}/>
      </Link>
      <Link href="/en" locale="en">
        <Image src="/assets/img/en.png" alt="united kingdom flag" width={28} height={20}/>
      </Link>
    </div>
  )
}