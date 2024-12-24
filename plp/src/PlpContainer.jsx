import { useState, useEffect } from "react";
import { getProducts } from "../../Home/src/products";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../container/src/axiosInstance";
function PlpContainer(props) {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/products");
        setProducts( response.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error.message);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  const handleClick = (product) => {
    props.callback(product)
    // console.log(product);
  };
  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-4">
      <h2>{props.title}</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={product.images[0]}
                alt={product.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <p className="card-text">{product.name}</p>
                <p
                  className="card-text"
                  onClick={() => {
                    navigate(`/product/${product.id}`);
                  }}
                >
                  {product.description}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>
                <button
                  className="btn btn-primary w-100"
                  onClick={() => handleClick(product)} 
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlpContainer;
