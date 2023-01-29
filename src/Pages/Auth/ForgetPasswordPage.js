import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ForgetPasswordHook from "../../customHook/auth/forget-password-hook";
const ForgetPasswordPage = () => {
  const [email, handelEmailChange, isLoding, handelSubmit] =
    ForgetPasswordHook();
  return (
    <>
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center ">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">
              ادخل الايميل الخاص بك لاستعاده كلمه السر
            </label>
            <input
              value={email}
              onChange={handelEmailChange}
              placeholder="الايميل..."
              type="text"
              className="user-input mt-3 text-center mx-auto"
            />

            <button className="btn-login mx-auto mt-4" onClick={handelSubmit}>
              ارسال الكود
            </button>
          </Col>
        </Row>
      </Container>{" "}
    </>
  );
};

export default ForgetPasswordPage;
