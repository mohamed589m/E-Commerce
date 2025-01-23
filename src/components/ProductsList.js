import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const url_api = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [showButton,setShowButton]=useState(true);

  const getProducts = () => {
    fetch(url_api)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${url_api}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductInCategory = (catName) => {
    console.log(catName);
    fetch(`${url_api}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(function () {
    getProducts();
    getCategories();
  }, []);

  // console.log(products);

  return (
    <>
      <h2 className="text-capitalize text-center py-3 ">our products</h2>
      <div className="container">
        <div className="text-center">
          <button
            className="btn btn-outline-primary mx-2"
            onClick={() => {
              getProducts();
            }}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className="btn btn-outline-primary mx-2"
              onClick={() => {
                getProductInCategory(cat);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3 my-4" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ProductsList;
