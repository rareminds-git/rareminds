import React, { useState, useEffect, useCallback } from "react";
import PhotoLoader from "@/components/PhotoLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch, faCircleChevronLeft, faCircleChevronRight, faPlus, faMinus, faDownLeftAndUpRightToCenter,faMagnifyingGlassMinus } from "@fortawesome/free-solid-svg-icons";
import { useInView } from 'react-intersection-observer';

const universities = [
  "Alagappa University",
  "Annamalai University",
  "Bharathidasan University",
  "Bharathiyar University",
  "Madurai Kamaraj University",
  "Manonmaniam University",
  "Periyar University",
  "Thiruvalluvar University",
  "University of Madras",
];

const years = Array.from({ length: 2 }, (_, i) => (2024 + i).toString());

const categories = ["Panelists", "Winners", "Awards"];

const eventPlaceholders = [
  "Food Tech Innovators",
  "Green Grow",
  "Code Care",
  "Agri Innovators",
];

const LazyImage = ({ src, alt }: { src: string; alt: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Load image only once
    threshold: 0.1,    // Trigger when 10% of the image is visible
  });

  return (
    <div ref={ref} className="rounded-lg overflow-hidden shadow-lg">
      {inView ? (
        <img src={src} alt={alt} className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 bg-gray-200 animate-pulse" /> // Placeholder
      )}
    </div>
  );
};

const EventsGalleryPage: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [filteredImages, setFilteredImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [searchFilters, setSearchFilters] = useState({
    university: "",
    year: "",
    category: "",
  });
  const [visibleImages, setVisibleImages] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [placeholderIndex, setPlaceholderIndex] = useState<number>(0);

  // Modal state
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const observer = useRef<IntersectionObserver | null>(null);
  
  const loadMore = () => {
    // Load the next batch of 20 images
    setVisibleImages((prev) => [
      ...prev,
      ...filteredImages.slice(prev.length, prev.length + 20),
    ]);
  };

  const lastImageRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore(); // Trigger loadMore when the last image is in view
        }
      });
      if (node) observer.current.observe(node);
    },
    [filteredImages]
  );


  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:6069/api/images")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const allImages = data.images || [];
        setImages(allImages);
        setFilteredImages(allImages);
        setVisibleImages(allImages.slice(0, 20));
      })
      .catch((error) => {
        console.error("Error fetching images:", error.message);
        setImages([]);
        setFilteredImages([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % eventPlaceholders.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleFilterChange = (filterName: string, value: string) => {
    setSearchFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const applyFilters = () => {
    let updatedImages = images;

    if (searchFilters.university) {
      updatedImages = updatedImages.filter((image) =>
        image.toLowerCase().includes(searchFilters.university.toLowerCase())
      );
    }

    if (searchFilters.year) {
      updatedImages = updatedImages.filter((image) => image.includes(searchFilters.year));
    }

    if (searchFilters.category) {
      updatedImages = updatedImages.filter((image) =>
        image.toLowerCase().includes(searchFilters.category.toLowerCase())
      );
    }

    if (searchQuery) {
      updatedImages = updatedImages.filter((image) =>
        image.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredImages(updatedImages);
    setVisibleImages(updatedImages.slice(0, 9)); 
  };

  // Modal functions
  const openModal = (image: string, index: number) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setCurrentImage(null);
    setCurrentIndex(-1);
    setShowModal(false);
  };

  const showNextImage = () => {
    if (currentIndex < filteredImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentImage(filteredImages[currentIndex + 1]);
    }
  };

  const showPreviousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentImage(filteredImages[currentIndex - 1]);
    }
  };

  const zoomIn = () => setZoomLevel((prevZoom) => Math.min(prevZoom * 1.2, 3));
  const zoomOut = () => setZoomLevel((prevZoom) => Math.max(prevZoom / 1.2, 1));
  const resetZoom = () => setZoomLevel(1);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!showModal) return;

      if (event.key === "ArrowRight") {
        showNextImage();
      } else if (event.key === "ArrowLeft") {
        showPreviousImage();
      } else if (event.key === "Escape") {
        closeModal();
      }
    },
    [showModal, currentIndex, filteredImages]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="p-8">
      <div className="text-center py-6">
        <i className="fas fa-camera text-red-500 text-2xl"></i>
        <h1 className="text-4xl font-bold mt-2">
          Celebrating Connections
          <span className="italic text-red-500"> A glimpse into</span>
          <span className="block">Our Events</span>
        </h1>
      </div>

      {/* Search Bar and Filter Icon */}
      <div className="flex justify-center items-center gap-4 mb-6 py-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="p-3 border rounded-md shadow-md bg-gray-100 hover:bg-gray-200 transition-transform duration-300 ease-in-out transform"
          style={{
            transform: showFilters ? "rotate(90deg)" : "rotate(0)",
          }}
        >
          <FontAwesomeIcon icon={faFilter} className="text-gray-700 xl" />
        </button>

        <div className="flex items-center border rounded-md shadow-md w-[60%]">
          <input
            type="text"
            placeholder={`Search event name: ${eventPlaceholders[placeholderIndex]}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 w-full focus:outline-none"
          />
          <button
            onClick={applyFilters}
            className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      {/* Filter Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          showFilters ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-gray-100 p-4 rounded-md shadow-md mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              value={searchFilters.university}
              onChange={(e) => handleFilterChange("university", e.target.value)}
              className="p-2 border rounded-md"
            >
              <option value="">Select University</option>
              {universities.map((university) => (
                <option key={university} value={university}>
                  {university}
                </option>
              ))}
            </select>

            <select
              value={searchFilters.year}
              onChange={(e) => handleFilterChange("year", e.target.value)}
              className="p-2 border rounded-md"
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <select
              value={searchFilters.category}
              onChange={(e) => handleFilterChange("category", e.target.value)}
              className="p-2 border rounded-md"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={applyFilters}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
     {loading ? (
      <div className="flex justify-center items-center">
      <PhotoLoader />
      </div>
      ) : filteredImages.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
      {visibleImages.map((image, index) => {
      const isLastImage = index === visibleImages.length - 1; // Check if it's the last image
      return (
        <div
          key={index}
          className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
          onClick={() => openModal(image, index)}
          ref={isLastImage ? lastImageRef : null} // Attach observer to the last image
        >
          <LazyImage src={image} alt={`Image ${index + 1}`} />
        </div>
      );
    })}
  </div>
) : (
  <div className="text-center mt-10">
    <img
       src="/no-event-found.png"
       alt="No event found"
       className="mx-auto w-64"
       />
       <p className="text-gray-500 mt-4">No such event found. Try refining your search.</p>
       </div>
       )}


      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          <div className="relative max-w-4xl w-full h-auto pb-10">
            <img
              src={currentImage || ""}
              alt="Current"
              className="w-full h-auto rounded-lg"
              style={{ transform: `scale(${zoomLevel})` }}
            />
          </div>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white text-4xl z-50"
            onClick={showPreviousImage}
          >
            <FontAwesomeIcon icon={faCircleChevronLeft} />
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white text-4xl z-50"
            onClick={showNextImage}
          >
            <FontAwesomeIcon icon={faCircleChevronRight} />
          </button>

          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl z-50"
            onClick={closeModal}
          >
            <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
          </button>

          {/* Zoom Controls */}
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 py-2 px-4 rounded-md flex gap-4 text-gray-400 z-50">
            <button className="hover:text-white" onClick={zoomIn}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <button className="hover:text-white" onClick={zoomOut}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <button className="hover:text-white" onClick={resetZoom}>
              <FontAwesomeIcon icon={faMagnifyingGlassMinus} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsGalleryPage;
