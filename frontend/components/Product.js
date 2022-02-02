import styled from 'styled-components';
import Link from 'next/link';
import formatMoney from '../utils/formatMoney';

const ProductStyles = styled.div`
  max-width: 33.33%;
  width: 100%;

  margin: 0 0 2rem 0;

  @media (max-width: 1000px) {
    max-width: 50%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }

  h2,
  p {
    margin: 0;
  }

  .price {
    font-size: 1.5rem;
  }

  .productStylesInner {
    margin: 0 1rem;
    position: relative;
    overflow: hidden;
  }

  .sold {
    text-decoration: line-through;
  }

  .productDetails {
    background-color: transparent;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background-color: var(--yellow);
    padding: 2rem;
    cursor: pointer;
  }

  .img {
    display: block;
    height: 500px;
  }
`;

export default function Product({ product }) {
  // console.log(product.id);

  return (
    <ProductStyles>
      <div className="productStylesInner">
        <img src={product?.image?.publicUrlTransformed} alt={product.name} />
        <Link href={`/product/${product.id}`}>
          <div className="productDetails">
            <h2>
              <span className="mark">{product.name}</span>
            </h2>
            <p className={product.forSale ? 'price' : 'price sold'}>
              {formatMoney(product.price)}
            </p>
          </div>
        </Link>
      </div>
    </ProductStyles>
  );
}
