import Title from './ComplexTitle';
import Product from './Product';

const products = [
  { id: 1, name: 'chair', price: 30 },
  { id: 2, name: 'bed', price: 150 },
  { id: 3, name: 'couch', price: 550 },
];

function Products() {
  return (
    <div>
      <Title title="all products" />
      {products.map((product) => {
        return <Product {...product} key={product.id} />;
      })}
    </div>
  );
}

export default Products;
