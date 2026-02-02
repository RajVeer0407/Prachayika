import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import "./LightboxStyles.css";

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrevious }) => {
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onNext();
      else if (e.key === "ArrowLeft") onPrevious();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  return (
    <motion.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          className="close-button"
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoClose />
        </motion.button>

        <motion.button
          className="nav-button nav-button-left"
          onClick={onPrevious}
          whileHover={{ scale: 1.1, x: -5, y: "-50%" }}
        >
          <MdNavigateBefore />
        </motion.button>

        <div className="image-container">
          <motion.img
            key={currentIndex}
            className="lightbox-image"
            src={currentImage.image}
            alt={currentImage.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="image-info">
          <h2 className="image-title">{currentImage.title}</h2>
          <p className="image-caption">{currentImage.caption}</p>
          <div className="image-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        <motion.button
          className="nav-button nav-button-right"
          onClick={onNext}
          whileHover={{ scale: 1.1, x: 5, y: "-50%" }}
        >
          <MdNavigateNext />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Lightbox;
