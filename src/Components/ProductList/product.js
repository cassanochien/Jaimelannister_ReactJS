import React, { useState } from "react";
import categoryIcon from "../../assets/Images/category-icon.png";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import course01 from "../../assets/Images/course01.jpeg";

const Product = ({
  id,
  categoryName,
  courseName,
  metaDescription,
  imageUrl,
  coursePrice,
  quantity,
}) => {
  const { handleAddToCart, cartItem } = useContext(CartContext);
  const isInCart = cartItem.find((item) => item.id === id);
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item" key={id}>
      <div className="card">
        <img src={imageUrl || course01} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="card-title">
            <img src={categoryIcon} className="categoryIcon" /> {""}
            {categoryName}
          </div>
          <div className="cart-course"> {courseName}</div>
          <p className="card-text">{metaDescription}</p>
          <h6 className="coursePrice">${coursePrice}</h6>
        </div>

        {isInCart ? (
          <button type="button" className="btn btn-info" disabled>
            In cart
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-outline-info"
            id="btn-btn-outline-info"
            onClick={() =>
              handleAddToCart({
                id: id,
                name: courseName,
                price: coursePrice,
                imageUrl: imageUrl,
                quantity: quantity,
              })
            }
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
