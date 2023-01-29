import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import VerifyCodeHook from "../../customHook/auth/verify-code-hook";
const UserVerifyCodePage = () => {
  const [code, handelCodeChange, handelSubmit] = VerifyCodeHook();
  return (
    <>
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center ">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">
              ادخل الكود الذي تم ارساله اليك علي الايميل
            </label>

            <input
              value={code}
              onChange={handelCodeChange}
              placeholder="الكود..."
              type="text"
              className="user-input mt-3 text-center mx-auto"
            />

            <button className="btn-login mx-auto mt-4" onClick={handelSubmit}>
              تاكيد الكود
            </button>
          </Col>
        </Row>
      </Container>{" "}
    </>
  );
};

export default UserVerifyCodePage;
