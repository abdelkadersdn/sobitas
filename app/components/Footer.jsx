import Link from 'next/link';

const Footer = () => {
  return (
    <section className="w-full bg-slate-950">
        <div className="w-11/12 mx-auto py-8 gap-6 flex leading-6 text-slate-200 text-xs">
            <div className="w-1/3">
              <h4 className="mb-4 text-xl">CONTACT INFO</h4>
              <p className="mb-2">PROTEINE TUNISIE &#39;SOBITAS&#39; : est une Société tunisienne sise à Sousse crée en 2010 spécialisée dans le domaine de compléments alimentaires de nutrition, protéines et de développement musculaire.</p>
              <div>Email: <Link href="mailto:contact@protein.tn" className="hover:text-[#FF4001]">contact@protein.tn</Link></div>
              <p>Adresse: Rue Ribat, 4000 Sousse Tunisie</p>
            </div>
            <div className="w-1/3">
              <h4 className="mb-4 text-xl">SERVICES & VENTES</h4>
              <div><Link href="#" className="hover:text-[#FF4001]">Conditions générale de ventes</Link></div>
              <div><Link href="#" className="hover:text-[#FF4001]">Politique de remboursement</Link></div>
              <div><Link href="#" className="hover:text-[#FF4001]">Politique des cookies</Link></div>
              <div><Link href="#" className="hover:text-[#FF4001]">Qui somme nous</Link></div>
            </div>
            <div className="w-1/3">
              <h4 className="mb-4 text-xl">GÉLOCALISATION</h4>
              <div className="w-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6469.030124503593!2d10.630613!3d35.836372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302131b30e891b1%3A0x51dae0f25849b20c!2sProteine%20Tunisie%20%3A%20Compl%C3%A9ments%20alimentaires%20comme%20whey%20protein%20et%20cr%C3%A9atine%20monohydrate%20chez%20SOBITAS%20Sousse!5e0!3m2!1sfr!2sus!4v1711341879857!5m2!1sfr!2sus" allowfullscreen="" className="w-full h-40" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
        </div>
        <div className="w-11/12 mx-auto text-slate-200 text-sm text-center py-6 border-t border-solid border-gray-800">
           Copyright © 2024 <Link href="#" className="text-[#FF4001] hover:text-white">SOBITAS</Link> all rights reserved
        </div>
    </section>
    
  )
}

export default Footer