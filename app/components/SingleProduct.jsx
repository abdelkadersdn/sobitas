import Image from "next/image";
import fiveStars from '@/public/images/five-star-rating.svg';
import {Button} from "@nextui-org/react";

const SingleProduct = ({productImage, productTitle, productPrice}) => {
  return (
    <div className="w-1/4">
        <h2 className="font-bold">{productTitle}</h2>
        <div className="p-2">
            <Image 
            src={productImage}
            height={500}
            width={500}
            alt=""
            style={{height: '100%', width:'100%' }}
            />
        </div>
        
        <div>
            <Image 
            src={fiveStars}
            height={20}
            width={136}
            alt=""
            style={{height: '20px', width:'100%' }}
            />
        </div>

        <Button color="" variant="ghost" className="mt-4 hover:bg-[#db3600] hover:text-white border-[#db3600] text-[#db3600]">
            Commander à {productPrice} DTN
        </Button>
    </div>
  )
}

export default SingleProduct