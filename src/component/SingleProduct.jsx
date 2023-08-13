import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import Rating from "./Rating";
import { BsCurrencyRupee } from "react-icons/bs";
import { CartState } from "../context/Context";
import ProductDetails from "./ProductDetails";
import { Link, useNavigate } from 'react-router-dom';

const SingleProduct = ({ prod }) => {
  console.log(prod);
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const history = useNavigate();

  const handleDetailsModalClose = () => {
    setShowDetailsModal(false);
  };

  const handleDetailsModalShow = () => {
    setShowDetailsModal(true);
  };


const transformProducts = () => {
  let sortedProducts = cart.data;
  return sortedProducts;
};

  return (
    <div className="products shadow-lg">
      <Card>
        <Card.Img
          variant="top"
          className="img shadow-sm border-primary"
          src={prod.images[0]}
          alt={prod.name}
        />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>
              <BsCurrencyRupee />
              {prod.price}
            </span>
            <br></br>
            <Rating className="star" rating={prod.rating} />
          </Card.Subtitle>
          <div style={{ display: "flex", gap: "5rem" }}>
            {cart.some((p) => p.id === prod.id) ? (
              <Button
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  });
                }}
                variant="danger"
              >
                Remove from cart
              </Button>
            ) : (
              <Button
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: prod,
                  });
                }}
                disabled={!prod.stock}
              >
                {!prod.stock ? "Out of Stock" : "Add to cart"}
              </Button>
            )}
            <Button onClick={handleDetailsModalShow}>Details</Button>


          </div>
        </Card.Body>
      </Card>

      {/* Product Details Modal */}
      <Modal show={showDetailsModal} onHide={handleDetailsModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{prod.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p> <img src={prod.images[0]} alt={prod.name}  width="100%" height="250"/><br /></p>
        <p>Desc :- {prod.description}</p>
          <p>Price: {prod.price}</p>
         <p>Brand: {prod.brand}</p>
         <p>Rating:- {prod.rating}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDetailsModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SingleProduct;
