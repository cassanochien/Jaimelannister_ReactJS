import React from "react";
import course01 from "../../assets/Images/course01.jpeg";
import course02 from "../../assets/Images/course02.jpeg";
import course03 from "../../assets/Images/course03.jpg";
import course04 from "../../assets/Images/course04.jpeg";
import course05 from "../../assets/Images/course05.jpeg";
import course06 from "../../assets/Images/course06.jpg";
import course07 from "../../assets/Images/course07.jpg";
import course08 from "../../assets/Images/course08.jpg";

export const CourseData = [
  {
    id: 1,
    categoryName: "Java",
    courseName: "Spring Cloud",
    metaDescription: "Microservices With Spring Cloud & OAuth 2 Security...",
    imageUrl: course01,
    coursePrice: 1.299,
    createdAt: "2023-10-20",
    categoryId: 1,
    quantity: 1,
  },
  {
    id: 2,
    categoryName: "Java",
    courseName: "Java Web Servlet Jsp",
    metaDescription:
      "Giới thiệu về lập trình web servlet bằng ngôn ngữ Java...",
    imageUrl: course02,
    coursePrice: 2.249,
    createdAt: "2023-10-20",
    categoryId: 1,
    quantity: 1,
  },
  {
    id: 3,
    categoryName: "SQL",
    courseName: "Microsoft Access SQL",
    metaDescription: "Khóa học MS Access cho các bạn lập trình viên, các ...",
    imageUrl: course03,
    coursePrice: 1.799,
    createdAt: "2023-10-20",
    categoryId: 2,
    quantity: 1,
  },
  {
    id: 4,
    categoryName: "Java ",
    courseName: "Spring Boot JPA Security",
    metaDescription: "Spring Boot ra đời nhằm rút ngắn thời gian cài đặt ...",
    imageUrl: course04,
    coursePrice: 3.499,
    createdAt: "2023-10-20",
    categoryId: 1,
    quantity: 1,
  },
  {
    id: 5,
    categoryName: "JavaScript",
    courseName: "ReactJs & Redux",
    metaDescription: "ReactJs là một thư viện sử dụng JavaScript được phát ...",
    imageUrl: course05,
    coursePrice: 2.689,
    createdAt: "2023-10-20",
    categoryId: 3,
    quantity: 1,
  },
  {
    id: 6,
    categoryName: "SQL",
    courseName: "SQL cơ bản và nâng cao",
    metaDescription: "Khóa học SQL cung cấp các kiến thức nền tảng vững ...",
    imageUrl: course06,
    coursePrice: 1.999,
    createdAt: "2022-10-20",
    categoryId: 2,
    quantity: 1,
  },
  {
    id: 7,
    categoryName: "HTML/CSS",
    courseName: "HTML cơ bản",
    metaDescription: "Khóa học HTML để thiết kế giao diện Web dành cho ... ",
    imageUrl: course07,
    coursePrice: 0.899,
    createdAt: "2022-10-20",
    categoryId: 4,
    quantity: 1,
  },
  {
    id: 8,
    categoryName: "HTML/CSS",
    courseName: "CSS cơ bản",
    metaDescription: "Hướng dẫn sử dụng CSS cơ bản trong lập trình giao ... ",
    imageUrl: course08,
    coursePrice: 0.899,
    createdAt: "2022-10-20",
    categoryId: 4,
    quantity: 1,
  },
];
