import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = ({ match }) => {
  const product = products.find((product) => product._id === match.params.id);
  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>

      {/* Product details */}
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />{' '}
          {/* fluid keeps the img within the container */}
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                color="pink"
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: £{product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Display price/product availability */}
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>£{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              {/* Check item availability */}
              <ListGroup.Item>
                <Row>
                  <Col>Availability:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item className="d-grid">
                <Button
                  type="button"
                  className="product-buy-btn"
                  disabled={product.countInStock === 0}
                >
                  Buy
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
