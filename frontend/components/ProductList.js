import React from 'react';
import styled from 'styled-components';
import Product from './Product';

// import PaypalButton from './PaypalButton';

const ProductGridStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export default function ProductList({ products, error, loading }) {
  // console.log({ products, error, loading });

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ProductGridStyles>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </ProductGridStyles>
  );
}
