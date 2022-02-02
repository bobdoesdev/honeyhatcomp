import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';
import formatMoney from '../utils/formatMoney';

const ProductStyles = styled.div`
  width: 100%;
  margin: 0 0 2rem 0;
  display: flex;
  flex-wrap: no-wrap;

  @media (max-width: 768px) {
    display: block;
  }

  img,
  .details {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }

    h2 {
      background-color: transparent;
      z-index: 1;
      background-color: var(--yellow);
      padding: 2rem;
      display: inline-block;
      margin-bottom: 2rem;
    }
  }

  .details {
    padding: 0 2rem;

    @media (max-width: 768px) {
      padding: 2rem 0;
    }
  }

  .price {
    margin-bottom: 2rem;
  }

  h2,
  p {
    margin: 0;
  }

  .price {
    font-size: 1.5rem;
  }

  .sold {
    text-decoration: line-through;
  }

  a {
    background-color: transparent;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background-color: var(--yellow);
    padding: 2rem;
  }

  .sold {
    text-decoration: line-through;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      forSale
      image {
        publicUrlTransformed
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { Product } = data;
  console.log(Product);
  return (
    <ProductStyles>
      <Head>
        <title>HoneyHatComp | {Product.name}</title>
      </Head>
      <img src={Product.image.publicUrlTransformed} alt={Product.name} />
      <div className="details">
        <h2>{Product.name}</h2>
        <p className={`price ${!Product.forSale ? `sold` : ``}`}>
          {formatMoney(Product.price)}
        </p>
        <p>{Product.description}</p>
      </div>
    </ProductStyles>
  );
}
