import  { useEffect, useState } from "react";
import { getProductById } from "../../Home/src/products";
import { useParams } from "react-router-dom";
import axiosInstance from "../../container/src/axiosInstance";

function PdpContent() {
  const { id } = useParams(); // Extract the product ID from the URL
  const [product, setProduct] = useState(null); // State to store the product details

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/products/${id}`);
        response.data || null;
        setProduct( response.data); 
      } catch (error) {
        console.error(`Error fetching product by ID (${id}):`, error.message);
       null;
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>; 
  const productImage = product.images && product.images.length > 0 ? product.images[0] : null;

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6">
          <img
            src={productImage}
            alt={product.name}
            className="img-fluid rounded"
            style={{ maxHeight: "500px", objectFit: "contain" }}
          />
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p className="text-muted">{product.category}</p>
          <p>{product.description}</p>
          <h3>${product.price}</h3>

          {/* Add to Cart Button */}
          <button className="btn btn-primary mt-3" style={{ width: "200px" }}>
            Add to Cart
          </button>

          {/* Product Rating */}
          <div className="mt-3">
            <span>Rating: </span>
            <span>{product.rating} / 5</span>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-4">
        <h4>Additional Information</h4>
        <ul>
          <li><strong>Brand:</strong> {product.brand}</li>
          <li><strong>Stock Status:</strong> {product.stock > 0 ? "In Stock" : "Out of Stock"}</li>
        </ul>
      </div>
    </div>
  );
}

export default PdpContent;
