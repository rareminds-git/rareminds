import React, { useState } from "react";

const ImageGallery = () => {
  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/300/200",
    "https://picsum.photos/400/300",
    "https://picsum.photos/300/400",
    "https://picsum.photos/200/200",
    "https://picsum.photos/300/300",
    "https://picsum.photos/400/200",
    "https://picsum.photos/200/400",
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleImageClose = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    setSelectedImage(images[currentIndex]);
  };

  const handleNextClick = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    setSelectedImage(images[currentIndex]);
  };

  return (
    <section className="xl:px-28 lg:px-24 md:px-20 px-8 xl:pb-16 lg:pb-12 md:pb-8 pb-4 xl:py-16 lg:py-12 md:py-8 py-8 relative font-Syne">
      <h3 className="text-3xl font-bold text-center my-4">Events Gallery</h3>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-gallery-item">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => handleImageClick(image, index)}
            />
          </div>
        ))}
        {selectedImage && (
          <div className="image-gallery-overlay">
            <img src={selectedImage} alt="Selected Image" />
            <div className="overlay-controls">
              <button className="prev-button" onClick={handlePrevClick}>
                &lt;
              </button>
              <button className="next-button" onClick={handleNextClick}>
                &gt;
              </button>
            </div>
            <button className="close-button" onClick={handleImageClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
