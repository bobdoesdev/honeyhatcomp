import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import ProductList from '../components/ProductList';

export default function GalleryPage() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_NOT_FOR_SALE_QUERY);
  return (
    <ProductList
      products={data?.allProducts ? data.allProducts : ''}
      error={error}
      loading={loading}
    />
  );
}

const ALL_PRODUCTS_NOT_FOR_SALE_QUERY = gql`
  query ALL_PRODUCTS_NOT_FOR_SALE_QUERY {
    allProducts(where: { forSale: false }) {
      id
      description
      name
      price
      forSale
      image {
        publicUrlTransformed
      }
    }
  }
`;
