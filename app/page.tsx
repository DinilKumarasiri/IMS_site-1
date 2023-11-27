import About from "@/components/about";
import Bannner from "@/components/banner";
import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col">
      <Bannner />
      <About />
    </main>
  );
};

export default Home;
