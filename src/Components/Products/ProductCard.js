import React, { useState, useEffect } from "react";
import { Button, Card, Col } from "react-bootstrap";
import prod1 from "../../images/labtop.png";
import favoff from "../../images/fav-off.png";
import favon from "../../images/fav-on2.png";
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../../redux/actions/wishListAction";
import { removeFromWishList } from "../../redux/actions/wishListAction";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [favCliched, setFavCliched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handelAddToWishList = () => {
    // =================== add to wish list ===================
    if (!favCliched) {
      dispatch(
        addToWishList({
          productId: product._id,
        })
      );
      // console.log("تم اضافة المنتج الى قائمة المفضلة بنجاح");
      setFavCliched(!favCliched);
    }
    // =================== remove from wish list ===================
    if (favCliched) {
      dispatch(removeFromWishList(product._id));
      // console.log("تم حذف المنتج من قائمة المفضلة بنجاح");
      setFavCliched(!favCliched);
    }
  };

  const wishList = useSelector((state) => state.wishListReducer.wishList);
  const removedWishList = useSelector(
    (state) => state.wishListReducer.removedWishList
  );

  useEffect(() => {
    if (wishList.data !== null) {
      console.log("تم اضافة المنتج الى قائمة المفضلة بنجاح");
    }
    if (removedWishList.status === "success") {
      console.log("تم حذف المنتج من قائمة المفضلة بنجاح");
    }
  }, [wishList, removedWishList]);
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "345px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}
      >
        <Link
          to={`/products/${product._id}`}
          style={{
            textDecoration: "none",
            width: "100%",
          }}
        >
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={product.imageCover}
          />
        </Link>
        <div className="d-flex justify-content-end mx-2">
          <img
            src={favCliched ? favon : favoff}
            alt=""
            className="text-center"
            style={{
              height: "24px",
              width: "26px",
              cursor: "pointer",
            }}
            onClick={handelAddToWishList}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <div className="card-title">{product.title}</div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">
                  {product.ratingsAverage || 0}
                </div>
              </div>
              <div className="d-flex">
                <div className="card-price">{product.price}</div>
                <div className="card-currency mx-1">جنيه</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
