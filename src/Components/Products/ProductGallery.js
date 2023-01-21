import React from "react";
import mobile from "../../images/mobile.png";
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
  const [item] = ViewProductDetailsHook(id);
  console.log(item.data.images, "item from gallery");

  let images = [];
  if (item.data.images) {
    images = item.data.images.map((image) => {
      return {
        original: image,
      };
    });
  }

  // const images = [
  //   {
  //     original: `${mobile}`,
  //   },
  //   {
  //     original: `${mobile1}`,
  //   },
  //   {
  //     original: `${mobile2}`,
  //   },
  //   {
  //     original: `${mobile}`,
  //   },
  // ];

  return (
    <div
      className="product-gallary-card d-flex justfiy-content-center  align-items-center
    pt-2"
    >
      <ImageGallery
        items={images}
        defaultImage={mobile}
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
