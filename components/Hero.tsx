"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
           Purchase, reserve, or lease a vehicle with speed and simplicity.
        </h1>
        <p className="hero__subtitle">
        Simplify the process of finding your perfect car with our hassle-free filtering system.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-[#f70010] text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero_.png" alt='hero' fill className="object-contain" />
            </div>  
            <div className="hero__image-overlay">
                <Image src="/hero-bg_.png" alt='hero'fill className="object-contain " />
            </div>
      </div>
    </div>
  );
};

export default Hero;
