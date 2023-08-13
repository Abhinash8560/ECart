// ProductDetailsContainer.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const ProductDetailsContainer = ({ productsData }) => {
    if (!productsData) {
      return null; // Or any loading indicator
    }
  
    const { productId } = useParams();
    const product = productsData.find(prod => prod.id === parseInt(productId));
  
    return <ProductDetails prod={product} />;
  };
  

export default ProductDetailsContainer;
