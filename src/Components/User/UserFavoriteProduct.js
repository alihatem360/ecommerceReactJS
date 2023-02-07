import React from "react";
import { Row } from "react-bootstrap";
import CardContainerHook from "../../customHook/product/card-container-hook";
import CardProductsContainer from "../Products/CardProductsContainer";

const UserFavoriteProduct = () => {
  const [favItem, userFavList] = CardContainerHook();

  return (
    <Row className="justify-content-between ">
      <div className="admin-content-text">المنتجات المفضله</div>
      <Row className="justify-content-between ">
        {userFavList.length > 0 ? (
          <CardProductsContainer products={userFavList} />
        ) : (
          <h1>لا يوجد منتجات مفضله</h1>
        )}
      </Row>
    </Row>
  );
};

export default UserFavoriteProduct;
