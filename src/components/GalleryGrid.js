import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import galleryData from "./GalleryData";
import Lightbox from "./Lightbox";
import "./GalleryGridStyles.css";

const GalleryGrid = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToNext = () => {
    setSelectedImageIndex((prev) =>
      prev === galleryData.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? galleryData.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="gallery-container">
        <h1 className="gallery-title">Our Event Gallery</h1>
        <p className="gallery-subtitle">Explore our collection of memorable events</p>

        <div className="gallery-grid">
          {galleryData.map((item, index) => (
            <motion.div
              key={item.id}
              className="gallery-card"
              onClick={() => openLightbox(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <div className="image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h3 className="card-title">{item.title}</h3>
                    <span className="view-button">View Image</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={galleryData}
            currentIndex={selectedImageIndex}
            onClose={closeLightbox}
            onNext={goToNext}
            onPrevious={goToPrevious}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryGrid;
