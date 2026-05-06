const products = [
  {
    title: "Cabbage",
    isFruits: false,
    id: 1,
  },
  {
    title: "Garlic",
    isFruits: false,
    id: 2,
  },
  {
    title: "Apple",
    isFruits: true,
    id: 3,
  },
];

const Products = () => {
  return (
    <ul>
      {products.map((product) => {
        return (
          <li
            key={product.id}
            style={{
              color: product.isFruits ? "magenta" : "darkgreen",
            }}
          >
            {product.title}
          </li>
        );
      })}
    </ul>
  );
};

export default Products;
