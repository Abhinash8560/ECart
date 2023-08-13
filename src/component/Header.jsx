import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Alert, Badge, Container, FormControl, Navbar } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../assets/logo.png";
import { CartState } from "../context/Context";
import { BsCurrencyRupee } from "react-icons/bs";
import EmptyCart from "../assets/empty-cart.svg";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar className="nav ">
        <Container>
          <Navbar.Brand
            className="brand-name"
            href="/"
            style={{
              textDecoration: "none",
              fontSize: "22px",
              color: "white",
            }}
          >
            E-Cart
            <img
              alt="logo"
              src={Logo}
              width="35"
              height="30"
              className="d-inline-block align-top ms-3"
            />
          </Navbar.Brand>

          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              placeholder="Search a product"
              className="m-auto bar"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Text>

          <Button
            style={{ fontSize: 20 }}
            onClick={handleShow}
            className="bg-transparent"
          >
            <FaShoppingCart />
            <Badge
              className="rounded-circle "
              style={{
                fontSize: 16,
                height: 30,
                width: 30,
              }}
            >
              <span className="text-center"> {cart.length}</span>
            </Badge>
          </Button>

          <Offcanvas
            show={show}
            className="bg-light shadow-lg"
            onHide={handleClose}
          >
            <Offcanvas.Header className="bg-dark " closeButton>
              <Offcanvas.Title className="title ">
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    fontSize: "22px",
                    color: "white",
                  }}
                >
                  Super-Cart
                </Link>
                <img
                  alt="logo"
                  src={Logo}
                  width="35"
                  height="30"
                  className="d-inline-block align-top ms-3"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <Alert
                      variant="primary"
                      className="cartitem shadow-sm p-4 rounded"
                      key={prod.id}
                    >
                      <img
                        src={prod.images[0]}
                        className="cartItemImg"
                        alt={prod.title}
                      />
                      <div className="cartItemDetail ">
                        <span>
                          {prod.title.length > 20
                            ? prod.title.substr(0, 18) + "..."
                            : prod.title}
                        </span>
                        <span>
                          {" "}
                          <BsCurrencyRupee /> {prod.price}
                        </span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </Alert>
                  ))}

                  <Link to="/cart" className="btn btn-primary w-100 p-2">
                    Go To Cart
                  </Link>
                </>
              ) : (
                <div className="empty-cart ">
                  <img
                    src={EmptyCart}
                    style={{ height: 300, width: "80%" }}
                    alt="Empty Cart"
                  />
                  <h2 style={{ padding: 10 }}>Cart is Empty</h2>
                  <p>Please add some Items in your cart.</p>
                </div>
              )}
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;