import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import SideFilterSearchHook from "../../customHook/search/sideFilter_search_hook";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const CategorysHeader = () => {
  const [catItems, , , , , ,] = SideFilterSearchHook();

  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">الكل</div>
            {catItems ? (
              catItems.map((item, index) => (
                <div className="cat-text-header" key={index}>
                  <Link
                    to={`/products/allCategory/${item._id}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    {item.name}
                  </Link>
                </div>
              ))
            ) : (
              <div className="cat-text-header">لا يوجد تصنيفات</div>
            )}

            <div className="cat-text-header">
              <Link
                to="/allcategory"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                المزيد
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategorysHeader;
