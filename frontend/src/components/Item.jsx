import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Auth from "./Auth";
import "../css/Item.css";

export default function Item() {
    const { id } = useParams();
    const API = `http://localhost:4000/api/product/getoneproduct/${id}`;
    const API2 = "http://localhost:4000/api/cart/postProductinCart";
    Auth();

    const [product, setProduct] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(API);
                const data = response.data;
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        }
        fetchData();
    }, [API]);

    const AddtoCart = async () => {
        try {
            const userToken = localStorage.getItem("token");
            const response = await axios.post(API2, { userToken, id });
            console.log(userToken);
            console.log(response);
            window.location.reload();
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    };

    if (!product) {
        return <h1>Loading....</h1>;
    }

    return (
        <div className="container item-container">
            <div className="row item-row">
                <img
                    src={`http://localhost:4000/${product.image}`}
                    alt={product.description}
                    className="col-md-5 item-image"
                />
                <div className="col-md-5 mt-5 item-details">
                    <h1>{product.category.name}</h1>
                    <h2>{product.description.replace(/\. /g, '.\n')}</h2>
                    <h3>${product.price}</h3>
                    <button className="btn btn-success mt-5" onClick={AddtoCart}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
