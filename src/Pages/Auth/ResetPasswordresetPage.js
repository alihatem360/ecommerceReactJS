import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResetPasswordHook from "../../customHook/auth/reset-password-hook";
const ResetPasswordresetPage = () => {
  const [
    password,
    handelPasswordChange,
    confirmPassword,
    handelConfirmPasswordChange,
    handelSubmit,
  ] = ResetPasswordHook();
  return (
    <>
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center ">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">
              ادخل كلمه السر الجديده
            </label>
            <input
              value={password}
              onChange={handelPasswordChange}
              placeholder="كلمه السر..."
              type="password"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
              value={confirmPassword}
              onChange={handelConfirmPasswordChange}
              placeholder="تاكيد كلمه السر..."
              type="password"
              className="user-input mt-3 text-center mx-auto"
            />

            <button className="btn-login mx-auto mt-4" onClick={handelSubmit}>
              تاكيد كلمه السر
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ResetPasswordresetPage;
