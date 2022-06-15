import { useEffect, useState } from "react";
import ImageCarousel, { ImageType } from "./ImageCarousel";
import "../../../SCSS/Imageslider.scss";

function ImageSlider() {
  const [images, setImages] = useState<ImageType[]>();

  useEffect(() => {
    setImages(
      Array.from(Array(4).keys()).map((id) => ({
        id,
        url: `https://picsum.photos/1000?random=${id}`
      }))
    );
  }, []);

  return (
    <div>
      <div className="sliderContMob">
        <ImageCarousel images={images} />
      </div>
      <div className="sliderCont">
        <ImageCarousel images={images} />
      </div>
    </div>
    
  );
}

export default ImageSlider
