import { useEffect, useState } from "react";
import ImageCarousel, { ImageType } from "./ImageCarousel";
import "../../scss/imageslider.scss";

export default function App() {
  const [images, setImages] = useState<ImageType[]>();

  useEffect(() => {
    setImages(
      Array.from(Array(10).keys()).map((id) => ({
        id,
        url: `https://picsum.photos/1000?random=${id}`
      }))
    );
  }, []);

  return (
    <div className="App">
      <ImageCarousel images={images} />
    </div>
  );
}
