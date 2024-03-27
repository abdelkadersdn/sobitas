import Image from "next/image";
import Link from 'next/link';

import tel from '@/public/images/tel.svg';
import locationMarker from '@/public/images/location-marker.svg';
import delivery from '@/public/images/delivery.svg';

const TopHeader = () => {
  
  const googleMapLink = 'https://www.google.tn/maps/place/SOBITAS+:+PROTEINE+TUNISIE/@35.8363758,10.6280385,17z/data=!3m1!4b1!4m6!3m5!1s0x1302131b30e891b1:0x51dae0f25849b20c!8m2!3d35.8363715!4d10.6306134!16s%2Fg%2F11g4j5rl1d?hl=fr&entry=ttu';

  return (
    <section className="bg-slate-950 w-full">
      <ul className="flex justify-between py-3 w-11/12 mx-auto text-gray-100 text-sm">
        <li>
          <Image
          className="inline mr-1"
          src={tel}
          alt="Sobitas Tel"
          width={18}
          height={18}
          />
        Contactez-nous 
        <Link href="tel:+216 27 612 500" className="hover:text-[#FF4001] transition-all duration-700">+216 27 612 500</Link> | 
        <Link href="tel:+216 73 200 169" className="hover:text-[#FF4001] transition-all duration-700">+216 73 200 169</Link></li> 
        <li>
          <Image
          className="inline mr-1"
          src={locationMarker}
          alt="Sobitas Location"
          width={18}
          height={18}
          />
          <Link href={googleMapLink} className="hover:text-[#FF4001] transition-all duration-700">Rue Ribat, 4000 Sousse Tunisie</Link>
        </li>
        <li>
          <Image
          className="inline mr-1"
          src={delivery}
          alt="Sobitas Delivery"
          width={18}
          height={18}
          />
          Livraison gratuite à partir de 300 DT
        </li> 
      </ul>
    </section>
  )
}

export default TopHeader