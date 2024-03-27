import Image from "next/image";
import sobitasHero from '@/public/images/sobitas-hero.jpg'

const Hero = () => {
  return (
    <section className="w-full bg-black">
        <Image
          className="object-cover"
          src={sobitasHero}
          alt="Sobitas Logo"
          width={1600} height={700}
          style={{height: '700px', width:'100%' , objectFit: 'cover'}}
          />
    </section>
  )
}

export default Hero