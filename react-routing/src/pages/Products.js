import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h1>The products page</h1>
      <ul>
        <li>
          <Link to="/products/1">Book</Link>
        </li>
        <li>
          <Link to="/products/2">Cat</Link>
        </li>
        <li>
          <Link to="/products/3">Apple</Link>
        </li>
      </ul>
    </>
  );
};

export default Products;
