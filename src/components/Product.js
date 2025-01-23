import Image1 from "./assets/product1.jpg";
import { Link } from "react-router-dom";

function Product({ product, showButton }) {
  // console.log(product);
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5
          className="card-title"
          style={{ maxHeight: "20px", overflow: "hidden" }}
        >
          {product.title}
        </h5>
        <p
          className="card-text"
          style={{ maxHeight: "50px", overflow: "hidden" }}
        >
          {product.description}{" "}
        </p>
        <p>Price: {product.price}$</p>
        {showButton && (
          <Link
            to={`/product/${product.id}`}
            className="btn btn-primary text-capitalize"
          >
            details
          </Link>
        )}
      </div>
    </div>
  );
}
export default Product;
