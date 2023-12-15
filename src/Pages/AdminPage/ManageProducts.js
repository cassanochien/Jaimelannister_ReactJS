import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import MNPAdd from "./MNPAdd";
import MNPEdit from "./MNPEdit";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const handleDeleteProduct = (id) => {
    let confirmDelete = window.confirm("Are you sure?");

    if (confirmDelete) {
      axios
        .delete(`http://localhost:3000/courseData/${id}`)
        .then((res) => {
          if (res.status === 200) {
            // Xóa thành công, cập nhật danh sách sản phẩm
            setProducts((prevProductList) =>
              prevProductList.filter((product) => product.id !== id)
            );
          } else {
            console.error("Delete failed with status code: ", res.status);
          }
        })
        .catch((error) => {
          console.error("Error deleting product: ", error);
        });
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/courseData")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Link to="/admin">Back to Dashboard</Link>
      <div className="product-management">
        <div className="product-items">
          <p className="product-text">Manage Product</p>
          <MNPAdd />
        </div>

        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col" className="tr-name">
              Category name
            </th>
            <th scope="col" className="tr-name">
              Course name
            </th>
            <th scope="col" className="tr-name">
              Description
            </th>
            <th scope="col" className="tr-price">
              Price (USD)
            </th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.categoryName}</td>
              <td>{item.courseName}</td>
              <td>{item.metaDescription}</td>
              <td>{item.coursePrice}</td>
              <td>
                <MNPEdit id={item.id} />
                <span
                  className="product-icon_trash"
                  onClick={() => handleDeleteProduct(item.id)}
                >
                  <FaTrashAlt />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    </>
  );
};

export default ManageProducts;
