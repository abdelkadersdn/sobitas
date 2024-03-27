import Image from "next/image";
import Link from 'next/link';

import sobitasLogo from '@/public/images/sobitas-logo.png';
import SearchBox from "./SearchBox";
import PanelAccount from "./PanelAccount";


const Header = () => {
  return (
    <section className="w-full">
        <div className="w-11/12 mx-auto flex justify-between py-6">
            <Link href="">
                <Image
                className="inline mr-1"
                src={sobitasLogo}
                alt="Sobitas Logo"
                width={200}
                height={98}
                />
            </Link>
            <div className="w-full h-100 flex justify-end gap-2">
              <SearchBox />
              <PanelAccount />
            </div>
        </div>
    </section>
  )
}

export default Header
