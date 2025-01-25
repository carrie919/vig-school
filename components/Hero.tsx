import Image from "next/image";
import { useState, useEffect } from "react";
import h_00 from "@/assets/hero/h_00.jpg";
import h_01 from "@/assets/hero/h_01.jpg";
import h_02 from "@/assets/hero/h_02.jpg";
import h_03 from "@/assets/hero/h_03.jpg";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      id: "0",
      src: h_00,
      alt: "Image 0",
    },
    {
      id: "1",
      src: h_01,
      alt: "Image 1",
    },
    {
      id: "2",
      src: h_02,
      alt: "Image 2",
    },
    {
      id: "3",
      src: h_03,
      alt: "Image 3",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative h-[30vh] md:h-[70vh]">
      <div className="absolute inset-0">
        {images.map((myImg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={myImg.src}
              alt={myImg.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>
    </section>
  );
}
