'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Partners = () => {

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        lazyLoad: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]  
    };


    const images = [
        '/images/partners/appliednutrition.png',
        '/images/partners/ihstech.png',
        '/images/partners/jxfitness.png',
        '/images/partners/minolta.png',
        '/images/partners/recnutrition.png',
        '/images/partners/sevennutrition.png',
        '/images/partners/soulproject.png',
    ];



  return (
    <section className="w-full bg-gray-100">
        <div className="w-11/12 mx-auto py-8">
            <Slider {...sliderSettings}>
                {images.map((image, index) => (
                <div key={index}>
                    <Image src={image} alt={`Slide ${index + 1}`} className='p-6 ouline-none' width={205} height={248} style={{height: '100px', width:'100%' }} />
                </div>
                ))}
            </Slider>
        </div>
    </section>
  )
}

export default Partners