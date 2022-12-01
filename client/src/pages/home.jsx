import { useState } from "react";
import { useEffect } from "react";
import Ad from "../components/Ad";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Service from "../components/Service";

function Home() {
  const [isAdOpen, setIsAdOpen] = useState(false);

  useEffect(() => {
    let ranad = sessionStorage.getItem("ranad");
    if (ranad == null) {
      setTimeout(() => {
        setIsAdOpen(true);
        sessionStorage.setItem("ranad", true);
      }, 1500);
    }
  }, []);

  return (
    <>
      <Ad isAdOpen={isAdOpen} setIsAdOpen={setIsAdOpen} />
      <Hero />
      <Service />
      <Contact />
    </>
  );
}

export default Home;
