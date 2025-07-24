import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const data = [
  {
    photo: {
      url: "https://cdn.pixabay.com/photo/2015/04/24/20/58/girl-738303_640.jpg",
      pos: "50% 50%",
    },
  },
  {
    photo: {
      url: "https://img.freepik.com/premium-photo/girl-dancing-field-white-dress_548821-53912.jpg",
      pos: "50% 50%",
    },
  },
  {
    photo: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZ1c7PevB6r8DbOCjNJjvaOMwIFY7kDGX0VwFzYF5okq9L0MPaQkvk93Py9H2Xal1L2w&usqp=CAU",
      pos: "50% 50%",
    },
  },
  {
    photo: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZ1c7PevB6r8DbOCjNJjvaOMwIFY7kDGX0VwFzYF5okq9L0MPaQkvk93Py9H2Xal1L2w&usqp=CAU",
      pos: "50% 50%",
    },
  },
  {
    photo: {
      url: "https://cdn.pixabay.com/photo/2015/04/24/20/58/girl-738303_640.jpg",
      pos: "50% 50%",
    },
  },
  {
    photo: {
      url: "https://cdn.pixabay.com/photo/2015/04/24/20/58/girl-738303_640.jpg",
      pos: "50% 50%",
    },
  },
  {
    photo: {
      url: "https://cdn.pixabay.com/photo/2015/04/24/20/58/girl-738303_640.jpg",
      pos: "50% 50%",
    },
  },
];

const Gallery = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 0.3); // Speed of rotation
    }, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[100px]">
      <div
        className="h-screen overflow-hidden flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          className="relative w-[400px] h-[400px]"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${angle}deg)`,
          }}
        >
          {data.map((item, i) => {
            const itemAngle = (360 / data.length) * i;
            const url = item.photo.url;

            return (
              <div
                key={i}
                className="absolute w-48 h-64 rounded overflow-hidden shadow-lg"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(500px)`,
                }}
              >
                <img
                  src={url}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: item.photo.pos || "50% 50%",
                  }}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
