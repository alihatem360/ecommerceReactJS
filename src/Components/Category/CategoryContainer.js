import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import getAllCategory from "../../redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
const CategoryContainer = () => {
  const colors = [
    "#F4DBA5",
    "#0034FF",
    "#FFD3E8",
    "#55CFDF",
    "#FF6262",
    "#F4DBA5",
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const category = useSelector((state) => state.categoryReducer.categories);
  const loading = useSelector((state) => state.categoryReducer.isLoding);

  return (
    <div className="my-3">
      <Container>
        <div className="admin-content-text ">كل التصنيفات</div>
        <Row className="my-1 justify-content-between">
          {loading === false ? (
            category.data ? (
              category.data.map((item, index) => (
                <CategoryCard
                  key={index}
                  img={item.image}
                  background={colors[index]}
                />
              ))
            ) : (
              <h1>
                <Col className="text-center">لا يوجد تصنيفات</Col>
              </h1>
            )
          ) : (
            <>
              <Col className="text-center">
                <Spinner animation="border" variant="primary" />
              </Col>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default CategoryContainer;
