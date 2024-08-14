import React, { useEffect, useState } from "react";
import Auth from "./Auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../css/Shop.css';

export default function Shop() {
  Auth();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const API = "http://localhost:4000/api/product/getproducts";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(API);
        setProducts(response.data.productList);
        setFilteredProducts(response.data.productList);
        console.log(response.data.productList);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        console.error(err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  }, [category, products]);

  function handleItem(e, id) {
    e.preventDefault();
    navigate(`/item/${id}`);
  }

  return (
    <div>
      <div className="row d-flex justify-content-evenly con">
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Category Filters */}
        <div className="filter-container mb-3">
          <button className="btn filter-buttons" onClick={() => setCategory('all')}>All</button>
          <button className="btn filter-buttons" onClick={() => setCategory('66b1c6b2388460f69724d7db')}>Male</button>
          <button className="btn filter-buttons" onClick={() => setCategory('66b1c6b8388460f69724d7de')}>Female</button>
          <button className="btn filter-buttons" onClick={() => setCategory('66b1c6d5388460f69724d7e1')}>Kids</button>
        </div>

        {/* Product Display */}
        <div className="row justify-content-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="col-md-3 mb-4" key={product._id}>
                <button className="btn" onClick={(e) => handleItem(e, product._id)} style={{ border: 'none', background: 'transparent' }}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={`http://localhost:4000/${product.image}`}
                      alt={product.name}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">${product.price}</h5> {/* Dollar sign added here */}
                    </div>
                  </div>
                </button>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
