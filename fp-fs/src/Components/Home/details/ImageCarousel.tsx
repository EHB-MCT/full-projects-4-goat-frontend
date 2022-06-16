import React, { useEffect, useRef, useState } from "react";
import '../../../SCSS/Imageslider.scss';

export type ImageType = { id: number; url: string };

const ImageCarousel: React.FC<{ images?: ImageType[] }> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<ImageType>();
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);

  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        images.length
      );

      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleSelectedImageChange = (newIdx: number) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);
      if (carouselItemsRef?.current[newIdx]) {
        carouselItemsRef?.current[newIdx]?.scrollIntoView({
          inline: "center",
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <div>
      <div className="carousel-containerMob">
        <div
          className="selected-imageMob"
          style={{ backgroundImage: `url(${selectedImage?.url})` }}
        />
        <div className="carouselMob">
          <div className="carousel__imagesMob">
            {images &&
              images.map((image, idx) => (
                <div
                  onClick={() => handleSelectedImageChange(idx)}
                  style={{ backgroundImage: `url(${image.url})` }}
                  key={image.id}
                  className={`carousel__imageMob ${
                    selectedImageIndex === idx && "carousel__image-selectedMob"
                  }`}
                  ref={(el) => (carouselItemsRef.current[idx] = el)}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="carousel-container">
        <div
          className="selected-image"
          style={{ backgroundImage: `url(${selectedImage?.url})` }}
        />
        <div className="carousel">
          <div className="carousel__images">
            {images &&
              images.map((image, idx) => (
                <div
                  onClick={() => handleSelectedImageChange(idx)}
                  style={{ backgroundImage: `url(${image.url})` }}
                  key={image.id}
                  className={`carousel__image ${
                    selectedImageIndex === idx && "carousel__image-selected"
                  }`}
                  ref={(el) => (carouselItemsRef.current[idx] = el)}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
