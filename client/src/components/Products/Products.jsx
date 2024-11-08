import React from "react";
import "./Products.css";
import "./Utilities.css";
import Article from "../Article/Article";

const Products = () => {
  const articles = [
    {
      imgSrc: "https://5.imimg.com/data5/SELLER/Default/2022/1/IW/ZZ/QT/91630582/untitled-250x250.png",
      title: "CT Scan Machine",
      text: "In this case, the role of the health laboratory is very important to do a disease detection ...",
      linkText: "View CT-Scan Machines",
      linkHref: "#",
    },
    {
      imgSrc: "https://5.imimg.com/data5/SELLER/Default/2022/1/YY/OR/TJ/91630582/untitled-250x250.png",
      title: "Diagnostic Machine",
      text: "Herbal medicine is very widely used at this time because of its very good for your health ...",
      linkText: "View Diagnostic Machines",
      linkHref: "#",
    },
    {
      imgSrc: "/Oxygen_Concentrator_New.jpg",
      title: "Oxygen Concentrator",
      text: "A healthy lifestyle should start from now and also for your skin health ...",
      linkText: "View Oxygen Concentrator Machines",
      linkHref: "#",
    },
    {
      imgSrc: "/Ultrasound_Machine_New2.jpg",
      title: "Ultrasound Machine",
      text: "A healthy lifestyle should start from now and also for your skin health ...",
      linkText: "View Ultrasound Machines",
      linkHref: "#",
    },
    {
      imgSrc: "http://5.imimg.com/data5/GLADMIN/VideoImage/2023/9/340840673/UE/AV/DF/91630582/mobile-diagnost-wdr-500x500.jpg",
      title: "X-Ray",
      text: "A healthy lifestyle should start from now and also for your skin health ...",
      linkText: "View X-Ray Machines",
      linkHref: "#",
    },
  ];

  return (
    <section className="sc-articles">
      <div className="articles-shape">
        <img src="/curve-shape-2.png" alt="" />
      </div>
      <div className="container">
        <div className="articles-content">
          <div className="title-box text-center">
            <div className="content-wrapper">
              <h3 className="title-box-name">Our Featured Products</h3>
              <div className="title-separator mx-auto"></div>
            </div>
          </div>

          <div className="articles-list d-flex flex-wrap justify-content-center">
            {articles.map((article, index) => (
              <Article
                key={index}
                imgSrc={article.imgSrc}
                title={article.title}
                text={article.text}
                linkText={article.linkText}
                linkHref={article.linkHref}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
