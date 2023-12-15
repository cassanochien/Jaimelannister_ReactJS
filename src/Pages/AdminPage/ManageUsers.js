import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import USEREdit from "./USEREdit";
import USERAdd from "./USERAdd";
import axios from "axios";

const ManageUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDeleteUser = (id) => {
    let confirmDelete = window.confirm("Are you sure?");

    if (confirmDelete) {
      axios
        .delete(`http://localhost:3000/users/${id}`)
        .then((res) => {
          if (res.status === 200) {
            // Xóa thành công, cập nhật danh sách user
            setUsers((prevUser) => prevUser.filter((user) => user.id !== id));
          } else {
            console.error("Delete failed with status code: ", res.status);
          }
        })
        .catch((error) => {
          console.error("Error deleting product: ", error);
        });
    }
  };

  return (
    <>
      <Link to="/admin">Back to Dashboard</Link>
      <div className="product-management">
        <div className="product-items">
          <p className="product-text">Manage User</p>
          <USERAdd />
        </div>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col" className="tr-name">
              Name
            </th>
            <th scope="col" className="tr-name">
              Email
            </th>
            <th scope="col" className="tr-name">
              Password
            </th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <USEREdit id={user.id} />
                <span
                  className="product-icon_trash"
                  onClick={() => handleDeleteUser(user.id)}
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

export default ManageUser;
