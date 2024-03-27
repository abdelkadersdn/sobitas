import Image from 'next/image';

const FeatureCard = ({icon, title, subtitle}) => {

  
  return (
    <div className="rounded-lg border-2 border-[#db3600] w-1/4 text-center h-60 flex flex-col content-center justify-center hover:scale-[95%] transition-all duration-700">
      
      <div className="h-20 w-20 bg-[#db3600] flex justify-center content-center rounded-full p-4 mx-auto mb-8">
        <Image
        className=""
        src={icon}
        alt={title}
        width={32}
        height={32}
        style={{height: '90%', width:'90%' }}
        />
      </div>
      <h3 className="uppercase text-[#db3600] font-bold text-xl mb-1">{title}</h3>
      <h4 className="text-sm">{subtitle}</h4>
    </div>
  )
}

export default FeatureCard