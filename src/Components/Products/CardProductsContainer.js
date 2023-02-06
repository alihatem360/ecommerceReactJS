import React, { useState, useRef, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Container, Col, Collapse } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Utility/SubTitle.js";
import { useDispatch, useSelector } from "react-redux";
import { getUserWishList } from "../../redux/actions/wishListAction";
const CardProductsContainer = ({ products, title, btntitle, pathText }) => {
  const dispatch = useDispatch();
  const [favItem, setFavItem] = useState([]);
  const [loading, setLoading] = useState(false);
  // get user wish list when component mount
  useEffect(() => {
    setLoading(true);
    const getWishList = async () => {
      await dispatch(getUserWishList());
    };
    getWishList();
    setLoading(false);
  }, []);

  // get user wish list from redux
  const wishList = useSelector((state) => state.wishListReducer.userWishList);

  useEffect(() => {
    if (!loading) {
      if (wishList.data) {
        setFavItem(wishList.data.data.map((item) => item._id));
      }
    }
  }, [wishList]);
  //  array of favorite items
  console.log(favItem, "favItem in card product container");
  return (
    <Container>
      {products && (
        <SubTitle title={title} btntitle={btntitle} pathText="/products" />
      )}
      <Row className="justify-content-between ">
        {products ? (
          products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))
        ) : (
          <h1>لا يوجد منتجات</h1>
        )}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
