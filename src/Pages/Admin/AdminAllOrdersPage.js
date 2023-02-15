import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllOrder from "../../Components/Admin/AdminAllOrder";
import PaginationCompontent from "../../Components/Utility/Pagination";
import UserGetAllOrderHook from "../../customHook/user/user-get-all-order-hook";
const AdminAllOrdersPage = () => {
  const [userName, order, paginationResult, results, handelPaginate] =
    UserGetAllOrderHook();
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAllOrder />
          {paginationResult.numberOfPages > 1 && (
            <PaginationCompontent
              paginationPageNumber={paginationResult.numberOfPages}
              onPress={handelPaginate}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllOrdersPage;
