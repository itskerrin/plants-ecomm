import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  // productList linked to store reducer
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // Get products from the backend
  useEffect(() => {
    dispatch(listProducts()); // dispatches the action
  }, [dispatch]);

  return (
    <>
      {/* Maps through each product and returns a Product component */}
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
