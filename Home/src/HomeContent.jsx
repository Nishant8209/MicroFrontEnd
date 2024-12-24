import  { useState, useEffect } from 'react';
import { getProducts } from './products';

function HomeContent({titel}) {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
      
        setProducts(response); 
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means it runs only once, when the component mounts

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-4">
      <h2>{titel}</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="card-img-top" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>
                <button className="btn btn-primary w-100">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeContent;
