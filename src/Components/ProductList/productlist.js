import React, { useState, useEffect } from "react";
import Product from "./product";
import axios from "axios";
import { CourseData } from "./courseData";
import { categoryData } from "./categoryData";

const ProductList = () => {
  const [category, setCategory] = useState(null);
  const [courseData, setCourseData] = useState([]);
  const [sortedCourses, setSortedCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/courseData")
      .then((response) => {
        setCourseData(response.data);
        setSortedCourses(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSorting = (cate_id) => {
    setCategory(cate_id);

    if (cate_id === null) {
      // Nếu cate_id là null, sử dụng axios để lấy dữ liệu và setCourses
      axios
        .get("http://localhost:3000/courseData")
        .then((response) => {
          setSortedCourses(response.data);
        })
        .catch((error) => console.log(error));
    } else {
      // Nếu cate_id không phải là null, lấy danh sách khóa học từ courseData và sắp xếp theo categoryName
      const sortedCourses = courseData
        .filter((course) => {
          if (course.categoryId !== null) {
            // Kiểm tra xem có trùng categoryId với cate_id không
            return (
              categoryData.find((category) => category.id === course.categoryId)
                ?.id === cate_id
            );
          }
          return false;
        })
        .slice(); // Tạo một bản sao của mảng để tránh ảnh hưởng trực tiếp đến courseData

      // Sắp xếp danh sách theo categoryName
      sortedCourses.sort((a, b) =>
        a.categoryName.localeCompare(b.categoryName)
      );

      // Cập nhật state courses
      setSortedCourses(sortedCourses);
    }
  };

  return (
    <>
      <section className="ProductList">
        <div className="container">
          <div className="Sort-by">
            <div className="btn-group">
              <button
                type="button"
                className="btn dropdown-toggle"
                id="btn-dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort by
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <div className="dropdowns">
                  {categoryData.map((item) => (
                    <li key={item.id}>
                      <div
                        className="category-name"
                        key={item.id}
                        onClick={() => handleSorting(item.id)}
                      >
                        {item.name}
                      </div>
                    </li>
                  ))}
                  <hr />
                  <li>
                    <div
                      className="category-name"
                      onClick={() => handleSorting(null)}
                    >
                      All categories
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="row">
            {sortedCourses.map((item) => {
              return (
                <Product
                  key={item.id}
                  id={item.id}
                  categoryName={item.categoryName}
                  courseName={item.courseName}
                  metaDescription={item.metaDescription}
                  imageUrl={item.imageUrl}
                  quantity={item.quantity}
                  coursePrice={item.coursePrice}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
