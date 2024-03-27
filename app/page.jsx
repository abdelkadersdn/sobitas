import Image from "next/image";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MegaMenu from "./components/MegaMenu";
import Partners from "./components/Partners";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import { Products } from "./components/Products";


function Home() {
  return (
    <main className="w-full">
      <TopHeader />
      <Header />
      <MegaMenu />
      <Hero />
      <Categories />
      <Products />
      <Features />
      <Partners />
      <Footer />
    </main>
  );
}

export default Home