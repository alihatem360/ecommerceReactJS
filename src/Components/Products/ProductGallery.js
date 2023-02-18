import React from "react";
import mobile1 from "../../images/mobile1.png";
import mobile2 from "../../images/mobile2.png";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../customHook/product/view-produc-details-hook";

const ProductGallery = () => {
  const { id } = useParams();
  const [product, images, category] = ViewProductDetailsHook(id);
  const baseURL = "https://ecommerce-api-p9x7.onrender.com";

  images &&
    images.forEach((element) => {
      // const originalPath = element.original;
      if (element.original.startsWith("undefined")) {
        const newPath = baseURL + element.original.slice("undefined".length);
        element.original = newPath;
      } else {
        const newPath = baseURL + element.original;
        element.original = newPath;
      }
    });

  return (
    <div
      className="product-gallary-card d-flex justfiy-content-center  align-items-center
    pt-2"
    >
      <ImageGallery
        items={images}
        showThumbnails={false}
        isRTL={true}
        showPlayButton={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
        showFullscreenButton={false}
      />
    </div>
  );
};

export default ProductGallery;
