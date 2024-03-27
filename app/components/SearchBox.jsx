import Image from "next/image";
import searchIcon from '@/public/images/search.svg';

function SearchBox({ placeholder, onChange, onClick }) {


  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="border border-gray-300 rounded-l px-4 py-2 outline-none focus:border-[#ff6f3f] h-12"
      />
      <button
        onClick={onClick}
        className="bg-[#FF4001] hover:bg-[#db3600] text-white font-semibold px-4 py-2 rounded-r outline-none h-12"
      >
        <Image
          className="inline mr-1"
          src={searchIcon}
          alt="Search"
          width={20}
          height={20}
          />
      </button>
    </div>
  )
}

export default SearchBox