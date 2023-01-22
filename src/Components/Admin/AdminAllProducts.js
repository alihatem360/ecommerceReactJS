import React from "react";
import { Row } from "react-bootstrap";
import AdminAllProducsCard from "./AdminAllProducsCard";
const AdminAllProducts = ({ products }) => {
  return (
    <div>
      <div className="admin-content-text">
        اداره جميع المنتجات ..{products && products.length} منتج..
      </div>
      <Row className="justify-content-center ">
        {products ? (
          products.map((item, index) => (
            <AdminAllProducsCard key={index} product={item} />
          ))
        ) : (
          <h1>لا يوجد منتجات</h1>
        )}
      </Row>
    </div>
  );
};

export default AdminAllProducts;
