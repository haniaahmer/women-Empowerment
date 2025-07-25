// src/components/GalleryC.jsx
import React, { useRef } from 'react';
import LightGallery from 'lightgallery/react';

// LightGallery styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

// LightGallery plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

// Images
import img1 from '../../assets/download.jpeg';
import img2 from '../../assets/logo.png';
import img3 from '../../assets/WE.jpg';

// Styled-components
import styled from 'styled-components';

const GalleryContainer = styled.div`
  max-width: 85vw;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const GridLayout = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 250px;
  grid-auto-flow: dense;

  a {
    display: block;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }

    &.wide {
      grid-column: span 2;
    }

    &.tall {
      grid-row: span 2;
    }

    &.big {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
`;

const images = [
  { src: img1, alt: 'Flag of India', className: 'tall' },
  { src: img2, alt: 'Logo', className: 'wide' },
  { src: img3, alt: 'WE', className: 'square' },
  { src: img1, alt: 'Nature', className: 'big' },
  { src: img2, alt: 'Architecture', className: 'tall' },
  { src: img3, alt: 'Food', className: 'wide' },
  { src: img1, alt: 'Flag of India', className: 'tall' },
  { src: img2, alt: 'Logo', className: 'wide' },
  { src: img3, alt: 'WE', className: 'square' },
  { src: img1, alt: 'Nature', className: 'big' },
  { src: img2, alt: 'Architecture', className: 'tall' },
  { src: img3, alt: 'Food', className: 'wide' },
];

const GalleryC = () => {
  const lightGalleryRef = useRef(null);

  return (
    <GalleryContainer>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-navy-800 leading-tight mb-5">
          Gallery
        </h1>
        <h3 className="text-center text-gray-600 max-w-2xl mx-auto mb-8 text-base md:text-lg">
  A glimpse into our journey — empowering communities, uplifting lives, and creating lasting impact.
</h3>

      </div>

      <LightGallery
        ref={lightGalleryRef}
        plugins={[
          lgThumbnail,
          lgZoom,
          lgAutoplay,
          lgFullscreen,
          lgRotate,
          lgShare,
        ]}
        mode="lg-slide"
        speed={500}
        closable={true}
        loop={true}
        download={false}
        counter={true}
        progressBar={true}
        autoplay={true}
        pause={3000}
        escKey={true}
        keyPress={true}
        enableDrag={true}
        enableSwipe={true}
        selector=".gallery-item"
        zoomFromOrigin={true}
        hideBarsDelay={2000}
        showAfterLoad={true}
      >
        <GridLayout>
          {images.map((image, index) => (
            <a
              href={image.src}
              key={index}
              className={`gallery-item ${image.className}`}
              data-sub-html={`<h4>${image.alt}</h4>`}
              data-lg-size="1400-933"
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </a>
          ))}
        </GridLayout>
      </LightGallery>
    </GalleryContainer>
  );
};

export default GalleryC;
