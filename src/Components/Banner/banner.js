import React from "react";
import unsplash02 from "../../assets/Images/unsplash02.avif";
import unsplash03 from "../../assets/Images/unsplash03.avif";
import unsplash04 from "../../assets/Images/unsplash04.avif";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="container">
        <section className="myslides">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={unsplash02} className="d-block w-100 " alt="..." />
              </div>
              <div className="carousel-item">
                <img src={unsplash03} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={unsplash04} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
