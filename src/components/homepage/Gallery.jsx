import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const base = "unsplash.com/photo";
const data = [
  {
    common: "Lion",
    binomial: "Panthera leo",
    photo: {
      code: "1583499871880-de841d1ace2a",
      page: "lion-lying-on-brown-rock-MUeeyzsjiY8",
      text: "lion couple kissing on a brown rock",
      pos: "47% 35%",
      by: "Clément Roy",
    },
  },
  // Add more animals...
];

const Gallery = () => {
  const { scrollY } = useScroll();
  const [angleOffset, setAngleOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      setAngleOffset(scrollTop * 0.15); // Adjust sensitivity here
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-[100px] bg-black text-[#dedede] font-sans">
      
      <div className="h-screen overflow-hidden flex items-center justify-center [perspective:1000px]">
        <div className="relative w-[400px] h-[400px] [transform-style:preserve-3d]">
          {data.map((item, i) => {
            const angle = (360 / data.length) * i + angleOffset;
            const url = `https://images.${base}-${item.photo.code}?h=900`;

            return (
              <motion.article
                key={i}
                className="absolute w-64 h-100 rounded overflow-hidden shadow-lg"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(500px)`,
                }}
              >
                <img
                  src={url}
                  alt={item.photo.text}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: item.photo.pos || "50% 50%" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center">
                  <h2 className="text-lg font-bold">{item.common}</h2>
                  <em>{item.binomial}</em>
                  <p className="text-xs">
                    by{" "}
                    <a
                      href={`https://${base}s/${item.photo.page}`}
                      className="underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.photo.by}
                    </a>
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
