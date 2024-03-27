import SingleProduct from "./SingleProduct";

import ironMass from '@/public/images/iron-mass-20.png';
import massXxl from '@/public/images/mass-xxl.png';
import massivePro from '@/public/images/massive-professional.png';
import oneHundredIsolate from '@/public/images/100-isolate.png';

export const Products = () => {
  return (
    <section className="w-full bg-gray-100 py-12 text-center">
        <h3 className="uppercase text-2xl text-center text-[#FF4001] font-bold mb-12">Nos Produits</h3>
        <div className="w-11/12 mx-auto flex ">
            <SingleProduct productImage={ironMass} productTitle="IRON MASS 20" productPrice="250" />
            <SingleProduct productImage={massXxl} productTitle="MASS XXL" productPrice="250" />
            <SingleProduct productImage={massivePro} productTitle="MASSIVE PROFESSIONAL" productPrice="250" />
            <SingleProduct productImage={oneHundredIsolate} productTitle="100 ISOLATE" productPrice="250" />
        </div>
    </section>
  )
}
;

