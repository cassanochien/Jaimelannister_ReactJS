import React, { useReducer } from "react";
import Product from "./product";
import { CourseData } from "./courseData";
import { categoryData } from "./categoryData";

// useReducer form:
// 1. initState
const initState = {
  product: { CourseData },
};
// 2. Actions
// 3. Reducer
// 4. Dispatch
const testProductList = () => {
  const [job, jobDispatch] = useReducer(jobReducer, initState);
  const [category, categoryDispatch] = useReducer(categoryReducer, null);

  return (
    <>
      <section className="ProductList">
        <div className="container">
          <div className="Sort-by">
            <div className="btn-group">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort by
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <div className="dropdowns">
                  <li>
                    <div
                      className="category-name"
                      onClick={() => handleCLick(null)}
                    >
                      All categories
                    </div>
                  </li>
                  {categoryData.map((item) => (
                    <li>
                      <div
                        className="category-name"
                        key={item.id}
                        onClick={() => handleCLick(item.id)}
                      >
                        {item.name}
                      </div>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          </div>
          <div className="row">
            {job.map((item) => {
              return (
                <Product
                  key={item.id}
                  categoryName={item.categoryName}
                  courseName={item.courseName}
                  metaDescription={item.metaDescription}
                  imageUrl={item.imageUrl}
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

export default testProductList;
