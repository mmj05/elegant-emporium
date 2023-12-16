import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../features/product/productSlice';
import { AppDispatch, RootState } from '../../app/store';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);
  const productStatus = useSelector((state: RootState) => state.product.status);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  return (
    <Row md='2'>
      {products.map((product, i) => (
        <Col key={i}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductGrid;
