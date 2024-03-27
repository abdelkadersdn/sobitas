"use client";

import {Navbar, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import {ChevronDown, Supplements, Weight, Clothes, Preintrapost, Prisemasse, Proteine} from "./Icons.jsx";

const MegaMenu = () => {


  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    supplements : <Supplements className="text-secondary" fill="currentColor" size={30} />,
    weight : <Weight className="text-success" fill="currentColor" size={30} />,
    clothes : <Clothes className="text-primary" fill="currentColor" size={30} />,
    preintrapost : <Preintrapost className="text-danger" fill="currentColor" size={30} />,
    prisemasse : <Prisemasse className="text-warning" fill="currentColor" size={30} />,
    proteine : <Proteine className="text-secondary" fill="currentColor" size={30} />,
  };

  return (
    <section className="w-full">
      <Navbar className="bg-gray-100">
        <NavbarContent className="hidden sm:flex gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 uppercase" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#" className="text-gray-800 px-3 py-2 font-bold text-sm hover:text-[#FF4001] transition-all duration-700">
              Accueil
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="text-gray-800 px-3 py-2 font-bold text-sm hover:text-[#FF4001] transition-all duration-700">
              Qui sommes nous
            </Link>
          </NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-gray-800 px-3 py-2 font-bold text-sm hover:text-[#FF4001] transition-all duration-700 uppercase"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Nos produits
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Nos produits"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="acides_amines"
                description="Découvrez nos acides aminés en Tunisie, BCAA, créatine, et autres compléments nutritionnels."
                startContent={icons.supplements}
              >
                Acides Aminés
              </DropdownItem>
              <DropdownItem
                key="perte_de_poids"
                description="Perte de Poids en Tunisie, explorez nos produits Thermogenics notamment la CARNITINE LIQUID, ANIMAL CUTS NO-STIM POWDER."
                startContent={icons.weight}
              >
                Perte de Poids
              </DropdownItem>
              <DropdownItem
                key="prise_de_masse"
                description="Optimisez votre prise de masse en Tunisie avec nos protéines dédiées à la prise de masse, offertes à des prix pas cher et compétitifs."
                startContent={icons.prisemasse}
              >
                Prise de masse
              </DropdownItem>
              <DropdownItem
                key="Proteine"
                description="Boutique de vente de protéine Tunisie en ligne à prix pas cher. Les meilleurs protein à prix pas cher pour la Whey protein, Isolate protein et la Gold Protein."
                startContent={icons.proteine}
              >
                Protéine
              </DropdownItem>
              <DropdownItem
                key="pre_intra_post_workout"
                description="Optimisez chaque étape de votre routine d'entraînement avec nos solutions pré, intra et post-workout en Tunisie, disponibles à des prix abordables."
                startContent={icons.preintrapost}
              >
                Pré, Intra & Post workout
              </DropdownItem>
              <DropdownItem
                key="vetements_accessoires"
                description="Explorez notre sélection de vêtements et accessoires de sport de haute qualité à des prix imbattables en ligne."
                startContent={icons.clothes}
              >
                Vetements et Accessoires
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Link color="foreground" href="#" className="text-gray-800 px-3 py-2 font-bold text-sm hover:text-[#FF4001] transition-all duration-700">
              Packs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="text-gray-800 px-3 py-2 font-bold text-sm hover:text-[#FF4001] transition-all duration-700">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="text-gray-800 px-3 py-2 font-bold text-sm hover:text-[#FF4001] transition-all duration-700">
              Contactez nous
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </section>
    );
  };
  
  export default MegaMenu;
  