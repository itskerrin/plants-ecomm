import { Card, Button, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <CardGroup>
      <Card className="cards" style={{ width: '18rem' }}>
        <Link to={`/product/${product._id}`}>
          <Card.Img
            className="product-image"
            variant="top"
            src={product.image}
          />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Card.Text as="h3">£{product.price}</Card.Text>

          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color="pink"
            />

            <Button variant="primary" className="btn-buy">
              BUY
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default Product;
