import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import PaginationCompontent from "../../Components/Utility/Pagination";
import AllProductAdminHook from "../../customHook/admin/all-product-admin-hook";
const AdminAllProductsPage = () => {
  const [products, pagination, handelPaginate] = AllProductAdminHook();

  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          {products && <AdminAllProducts products={products} />}
          <PaginationCompontent
            paginationPageNumber={pagination.numberOfPages}
            onPress={handelPaginate}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllProductsPage;
