import React from "react";
import { Container } from "react-bootstrap";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import ProductDetails from "../../Components/Products/ProductDetails";
import CategorysHeader from "../../Components/Category/CategorysHeader";
import RateContainer from "../../Components/Rate/RateContainer";
import ViewProductDetailsHook from "../../customHook/product/view-produc-details-hook";
const ProductDetalisPage = () => {
  const [product, images, category, brand, relatedProduct] =
    ViewProductDetailsHook();
  let relatedProductArray = [];
  if (relatedProduct) {
    relatedProductArray = relatedProduct.slice(0, 4);
  }

  let ratingsAverage = "",
    ratingsQuantity = "";
  if (product) {
    ratingsAverage = product.ratingsAverage;
    ratingsQuantity = product.ratingsQuantity;
  }

  return (
    <div>
      <CategorysHeader />
      <Container>
        <ProductDetails />
        <RateContainer
          ratingsAverage={ratingsAverage}
          ratingsQuantity={ratingsQuantity}
        />
        <CardProductsContainer
          products={relatedProductArray}
          title="منتجات قد تعجبك"
          btntitle=""
        />
      </Container>
    </div>
  );
};

export default ProductDetalisPage;
