import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utility/SubTitle";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { Spinner } from "react-bootstrap";
const HomeCategory = () => {
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
    <Container>
      <SubTitle title=" التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex  justify-content-between">
        {loading === false ? (
          category.data ? (
            category.data
              .slice(0, 5)
              .map((item, index) => (
                <CategoryCard
                  key={index}
                  img={item.image}
                  background={colors[index]}
                  title={item.name}
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
  );
};

export default HomeCategory;
