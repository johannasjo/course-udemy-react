import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Book",
    price: 6.99,
    description: "lorem ipsum",
  },
  {
    id: 2,
    title: "Apple",
    price: 2.99,
    description: "lorem ipsum",
  },
  {
    id: 3,
    title: "Pen",
    price: 0.99,
    description: "lorem ipsum",
  },
  {
    id: 4,
    title: "Horse",
    price: 116.99,
    description: "lorem ipsum",
  },
  {
    id: 5,
    title: "Tea",
    price: 2.99,
    description: "lorem ipsum",
  },
  {
    id: 6,
    title: "Water",
    price: 6.99,
    description: "lorem ipsum",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
