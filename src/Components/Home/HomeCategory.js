import Reac from "react";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utility/SubTitle";
import HomeCategoryHook from "../../customHook/category/home-category-hook";
import { Spinner } from "react-bootstrap";
const HomeCategory = () => {
  const [category, loading, colors] = HomeCategoryHook();
  return (
    <Container>
      <SubTitle title=" التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-5 d-flex  justify-content-between">
        {loading === false ? (
          category.data ? (
            category.data
              .slice(0, 5)
              .map((item, index) => (
                <CategoryCard
                  key={index}
                  img={item.image}
                  itemID={item._id}
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
          <Col className="text-center">
            <Spinner animation="border" variant="primary" />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;
