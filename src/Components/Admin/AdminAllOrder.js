import React from "react";
import { Row } from "react-bootstrap";
import AdminAllOrderProduct from "./AdminAllOrderProduct";
import UserGetAllOrderHook from "../../customHook/user/user-get-all-order-hook";

const AdminAllOrder = () => {
  const [userName, order, paginationResult, results, handelPaginate] =
    UserGetAllOrderHook();

  if (order) {
    console.log(order, "order");
  }
  return (
    <div>
      <Row className="justify-content-between ">
        <div className="admin-content-text">
          {" "}
          اهلا بك {userName}👋 .. كل الطلبات # {results ? results : 0}
        </div>
        {order.length > 0 ? (
          order.map((item) => (
            <AdminAllOrderProduct key={item._id} orderItem={item} />
          ))
        ) : (
          <div className="admin-content-text">لا يوجد طلبات</div>
        )}
      </Row>
    </div>
  );
};

export default AdminAllOrder;
