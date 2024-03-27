import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import Image from 'next/image';
import acideWoman from '@/public/images/front-view-woman-with-copy-space.jpg';
import pertePoids from '@/public/images/weight-loss.jpg';
import priseMasse from '@/public/images/buff-dude.jpg';
import proteine from '@/public/images/protein-spoon.jpg';
import workout from '@/public/images/man-working-out.jpg';


const Categories = () => {
  return (
    <section className="w-full">
        <div className="w-11/12 mx-auto font-bold py-12 gap-4">
            <h3 className="uppercase text-2xl text-center text-[#FF4001]">Nos Catégories</h3>
            <div className="gap-4 flex mt-8">
                <Card className="w-full sm:w-1/5 h-[250px] shadow-none hover:scale-[95%] transition-all duration-700">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Amino acids</p>
                        <h4 className="text-white font-medium text-large">ACIDES AMINES</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src={acideWoman}
                        height={790}
                        width={1000}
                        style={{height: '250px', width:'100%' }}
                    />
                </Card>
                <Card className="w-full sm:w-1/5 h-[250px] shadow-none hover:scale-[95%] transition-all duration-700">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Weight Loss</p>
                        <h4 className="text-white font-medium text-large">PERTE DE POIDS</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="PERTE DE POIDS"
                        className="z-0 w-full h-full object-cover"
                        src={pertePoids}
                        height={790}
                        width={1000}
                        style={{height: '250px', width:'100%' }}
                    />
                </Card>
                <Card className="w-full sm:w-1/5 h-[250px] shadow-none hover:scale-[95%] transition-all duration-700">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Muscle Gain</p>
                        <h4 className="text-white font-medium text-large">PRISE DE MASSE</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="PRISE DE MASSE"
                        className="z-0 w-full h-full object-cover"
                        src={priseMasse}
                        height={790}
                        width={1000}
                        style={{height: '250px', width:'100%' }}
                    />
                </Card>
                <Card className="w-full sm:w-1/5 h-[250px] shadow-none hover:scale-[95%] transition-all duration-700">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Proteins</p>
                        <h4 className="text-white font-medium text-large">PROTEINES</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="PROTEINES"
                        className="z-0 w-full h-full object-cover"
                        src={proteine}
                        height={790}
                        width={1000}
                        style={{height: '250px', width:'100%' }}
                    />
                </Card>
                <Card className="w-full sm:w-1/5 h-[250px] shadow-none hover:scale-[95%] transition-all duration-700">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Pre, Intra & Post Workout</p>
                        <h4 className="text-white font-medium text-large">INTER WORKOUTS</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="PRE, INTRA & POST WORKOUT"
                        className="z-0 w-full h-full object-cover"
                        src={workout}
                        height={790}
                        width={1000}
                        style={{height: '250px', width:'100%' }}
                    />
                </Card>
            </div>
        </div>
    </section>
  )
}

export default Categories