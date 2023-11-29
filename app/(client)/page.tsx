import About from "@/components/about";
import Bannner from "@/components/banner";
import Footer from "@/components/footer";
import Partner from "@/components/partner";
import Product from "@/components/product";
import Services from "@/components/services";
import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col">
      <Bannner />
      <About />
      <Services />
      <hr className="w-[80%] h-1 mx-auto" />
      <Product />
      <Partner />
      <Footer />
    </main>
  );
};

export default Home;
