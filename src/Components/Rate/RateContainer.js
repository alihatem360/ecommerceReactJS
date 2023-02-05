import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RateItem from "./RateItem";
import PostRate from "./PostRate";
import PaginationCompontent from "../Utility/Pagination";
import rate from "../../images/rate.png";
import GettAllReviewsOneProductHook from "../../customHook/review/get-all-reviews-one-product-hokk";
import { useParams } from "react-router-dom";
const RateContainer = ({ ratingsQuantity, ratingsAverage }) => {
  const { id } = useParams();
  // get all reviews for one product by id from url
  const [reriewResponse, loading, onPress] = GettAllReviewsOneProductHook(id);

  let reriews = [];
  let paginationResult = {};
  // prenting all reviews
  if (reriewResponse.data) {
    reriews = reriewResponse.data.data;
    paginationResult = reriewResponse.data.paginationResult;
  }

  let user = "";
  if (localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex">
          <div className="sub-tile d-inline p-1 ">التقيمات</div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">{ratingsAverage}</div>
          <div className="rate-count d-inline p-1 pt-2">{`(${ratingsQuantity} تقييم)`}</div>
        </Col>
      </Row>
      <PostRate />
      {reriews.length !== 0 ? (
        reriews.map((item) => {
          return <RateItem key={item._id} item={item} />;
        })
      ) : (
        <div className="text-center">لم يتم اضافة تقييمات بعد</div>
      )}
      {
        // ckeck if number of pages > 1 to show pagination
      }
      {paginationResult.numberOfPages > 1 && (
        <PaginationCompontent
          onPress={onPress}
          paginationPageNumber={paginationResult.numberOfPages}
        />
      )}
    </Container>
  );
};

export default RateContainer;
