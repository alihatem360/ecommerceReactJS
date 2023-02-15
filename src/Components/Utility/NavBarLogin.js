import { Button } from "bootstrap";
import { useState, useEffect } from "react";
import React from "react";
import { Navbar, Nav, Container, FormControl } from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import { getLoggedUser } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBarSearchHook from "../../customHook/search/navBar_search_hooh";
import { NavDropdown } from "react-bootstrap";
import GetAllUserCartHook from "../../customHook/cart/get-all-user-cart-hook";
const NavBarLogin = () => {
  const [numOfCartItems, productItems] = GetAllUserCartHook();
  const [searchWord, onChangeSearchWord] = NavBarSearchHook();
  const dispatch = useDispatch();
  // get word from local storage
  let word = "";
  if (localStorage.getItem("searchWord")) {
    word = localStorage.getItem("searchWord");
  }

  let user = null;
  useEffect(() => {
    dispatch(getLoggedUser());
  }, []);

  //  ====================== get the user data from the server when user login  ======================
  const logedUser = useSelector((state) => state.authreduccer.loggedUser);
  if (logedUser) {
    user = logedUser.data;
  }

  // ======================= get the user data from the local storage =======================
  // let user = "";
  // if (localStorage.getItem("user")) {
  //   user = JSON.parse(localStorage.getItem("user"));
  //   console.log(user, "user");
  // }

  // ====================== handel logout ======================
  const handelLOgOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} className="logo" alt="sfvs" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* 
            search input 
         */}
          <FormControl
            value={word}
            onChange={onChangeSearchWord}
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            <Nav.Link
              href="/login"
              className="nav-text d-flex mt-3 justify-content-center"
            >
              <img src={login} className="login-img" alt="sfvs" />
              {user != null ? (
                <NavDropdown title={user.name} id="basic-nav-dropdown">
                  {user.role === "admin" ? (
                    <NavDropdown.Item>
                      <Link
                        to="/admin/allproducts"
                        style={{ textDecoration: "none" }}
                      >
                        لوحه التحكم
                      </Link>
                    </NavDropdown.Item>
                  ) : null}
                  {user.role === "user" ? (
                    <React.Fragment>
                      <NavDropdown.Item href="/user/user-profile">
                        الصفحه الشخصيه 😎
                      </NavDropdown.Item>

                      <NavDropdown.Item href="/user/allOrders">
                        طلباتي ⚡
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/user/favorite">
                        المفضله ❤
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/user/address">
                        العناوين المحفوظه
                      </NavDropdown.Item>
                    </React.Fragment>
                  ) : null}

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3" onClick={handelLOgOut}>
                    تسجيل الخروج
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <p style={{ color: "white" }}>دخول</p>
              )}
            </Nav.Link>
            <Nav.Link
              href="/cart"
              className="nav-text d-flex mt-3 justify-content-center position-relative"
              style={{ color: "white" }}
            >
              <img src={cart} className="login-img" alt="sfvs" />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {numOfCartItems ? numOfCartItems : 0}
              </span>
              <p style={{ color: "white" }}>العربه</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
