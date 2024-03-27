import Image from "next/image";
import cart from '@/public/images/cart.svg';
import user from '@/public/images/user.svg';

const PanelAccount = () => {
  return (
    <div className="flex items-center">
        
        <button
        onClick=""
        className="bg-[#FF4001] hover:bg-[#db3600] text-white font-semibold px-4 py-2 rounded-l h-12 outline-none"
      >
        <Image
          className="inline-block"
          src={cart}
          alt="cart"
          width={20}
          height={20}
          />
      </button>
      <button
        onClick=""
        className="bg-[#FF4001] hover:bg-[#db3600] text-white font-semibold px-4 py-2 rounded-r h-12 outline-none"
      >
        <Image
          className="inline"
          src={user}
          alt="account"
          width={20}
          height={20}
          />
      </button>
    </div>
  )
}

export default PanelAccount