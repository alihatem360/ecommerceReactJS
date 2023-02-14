import React from "react";
import { Row } from "react-bootstrap";
import UserAllOrdersItem from "./UserAllOrdersItem";
import UserGetAllOrderHook from "../../customHook/user/user-get-all-order-hook";
const UserAllOrders = () => {
  const [userName, order, paginationResult, results] = UserGetAllOrderHook();
  if (order) {
    console.log(order, "order");
  }
  if (paginationResult) {
    console.log(paginationResult, "paginationResult");
  }
  if (results) {
    console.log(results, "results");
  }
  return (
    <div>
      <Row className="justify-content-between ">
        <div className="admin-content-text">
          {" "}
          اهلا بك {userName}👋 .. عدد الطلبات لديك # {results ? results : 0}
        </div>
        {order.length > 0 ? (
          order.map((item) => (
            <UserAllOrdersItem key={item._id} orderItem={item} />
          ))
        ) : (
          <div className="admin-content-text">لا يوجد طلبات</div>
        )}
      </Row>
    </div>
  );
};

export default UserAllOrders;
