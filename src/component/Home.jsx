import { Col, Row } from "react-bootstrap";
import { CartState } from "../context/Context";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byRating, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products.data;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.stock);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.rating === byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProducts;
  };

  return (
    <Row className="home">
      <Col className=" sidebar-container my-4 " md={3}>
        <Filter />
      </Col>

      <div className="col-md-9 col-sm-11 mx-auto ">
        <div className="productContainer">
          {transformProducts().map((prod) => (
            <>
            <SingleProduct prod={prod} key={prod.id} />
            </>
  
          ))}
        </div>
      </div>
    </Row>
  );
};

export default Home;