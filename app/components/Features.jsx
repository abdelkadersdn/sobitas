import FeatureCard from "./FeatureCard";

import badgeCertif from '@/public/images/badge.svg';
import fastDelivery from '@/public/images/fast-delivery.svg';
import money from '@/public/images/money.svg';
import shieldSobitas from '@/public/images/shield.svg';

const Features = () => {

  return (
    <section className="w-full">
        <div className="w-11/12 mx-auto flex justify-between py-16 gap-4">
            <FeatureCard icon={fastDelivery} title="Livraison Rapide" subtitle="LIVRAISON SOUS 24 HEURES" />
            <FeatureCard icon={money} title="Paiement À La Livraison" subtitle="PAIEMENT SÉCURISÉ" />
            <FeatureCard icon={badgeCertif} title="Produits Certifiés" subtitle="CERTIFIÉ PAR LE MINSTÈRE DE SANTÉ" />
            <FeatureCard icon={shieldSobitas} title="Service SOBITAS" subtitle="73 200 169 - 27 612 500" />
        </div>
    </section>
  )
}

export default Features