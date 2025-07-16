import React, { useState, useEffect } from "react";

interface SlideshowProps {
  images: string[];
  interval?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ images, interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearTimeout(timer);
  }, [index, images.length, interval]);

  // Manual navigation
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="slideshow-container" style={{ position: "relative" }}>
      <button
        className="slideshow-arrow left"
        onClick={prevSlide}
        aria-label="Previous"
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.3)",
          color: "#fff",
          border: "none",
          fontSize: "2rem",
          cursor: "pointer",
          zIndex: 2,
          padding: "0 10px"
        }}
      >
        &#8592;
      </button>
      <img
        src={images[index]}
        alt={`Slideshow ${index + 1}`}
        className="about-slide-img"
      />
      <button
        className="slideshow-arrow right"
        onClick={nextSlide}
        aria-label="Next"
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.3)",
          color: "#fff",
          border: "none",
          fontSize: "2rem",
          cursor: "pointer",
          zIndex: 2,
          padding: "0 10px"
        }}
      >
        &#8594;
      </button>
    </div>
  );
};

export default Slideshow;