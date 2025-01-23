import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
  const url_api = "https://fakestoreapi.com/products";
  const params = useParams();
  // console.log(params);

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`${url_api}/${params.productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return <Product product={product} showButton={false} />;
}

export default ProductDetails;
