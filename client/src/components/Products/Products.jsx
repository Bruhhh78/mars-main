import React from "react";
import "./Products.css";
import "./Utilities.css";
import Article from "../Article/Article";

const Products = () => {
  const articles = [
    {
      imgSrc: "https://5.imimg.com/data5/SELLER/Default/2022/1/IW/ZZ/QT/91630582/untitled-250x250.png",
      title: "CT Scan Machine",
      text: "We offer Philips CT Scanner, Ingenuity Core Ct Scanner, Ingenuity Flex CT scanner, CT 5000 Ingenuity and Svity Scan CT 6000 ICT...",
      linkText: "View CT-Scan Machines",
      linkTo: "/category/CT-Scan Machine",
    },
    {
      imgSrc: "https://5.imimg.com/data5/SELLER/Default/2022/1/YY/OR/TJ/91630582/untitled-250x250.png",
      title: "Diagnostic Machine",
      text: "We offer Digital Diagnost C90 We are a leading Distributor / Channel Partner of Digital Diagnost C90 from Lucknow, India...",
      linkText: "View Diagnostic Machines",
      linkTo: "/category/Diagnostic Machine",
    },
    {
      imgSrc: "http://5.imimg.com/data5/GLADMIN/VideoImage/2023/9/340840673/UE/AV/DF/91630582/mobile-diagnost-wdr-500x500.jpg",
      title: "X-Ray",
      text: "Our range of products include Mobile Diagnost WDR and Proxi Diagnost N90.",
      linkText: "View X-Ray Machines",
      linkTo: "/category/X-Ray",
    },
    {
      imgSrc: "/Oxygen_Concentrator_New.jpg",
      title: "Oxygen Concentrator",
      text: "Our range of products include Everflo Home Oxygen System.",
      linkText: "View Oxygen Concentrator Machines",
      linkTo: "/category/Oxygen Concentrator",
    },
    {
      imgSrc: "/Ultrasound_Machine_New2.jpg",
      title: "Ultrasound Machine",
      text: "Leading Distributor / Channel Partner of ClearVue 650 Ultrasound System, Clearvue 350 Ultrasound Machine, ClearVue 850 Ultrasound Machine...",
      linkText: "View Ultrasound Machines",
      linkTo: "/category/Ultrasound Machine",
    },
    {
      imgSrc: "https://www.philips.co.in/c-dam/b2bhc/master/image-guided-therapy/mobile-c-arm/orthopedics/zenition-70.jpg",
      title: "C-ARM",
      text: "Philips Zenition 10 provides a cost-effective imaging solution for routine surgery, delivers the speed and efficiency needed to deal with high patient..",
      linkText: "View C-ARM",
      linkTo: "/category/C-ARM",
    },
    {
      imgSrc: "https://images.philips.com/is/image/philipsconsumer/e3dd3cbddbd54734bfb5ab7600d9a27c?&wid=305&hei=171&$jpglarge$",
      title: "Azurion",
      text: "Our Azurion Image Guided Therapy System allows you to easily and confidently perform a wide range of routine..",
      linkText: "View Azurion",
      linkTo: "/category/Azurion",
    }, 
    {
      imgSrc: "https://www.philips.co.in/c-dam/b2c/master/experience/hs/sleep-apnea-therapy/sleep-apnea-machines/CPAP-machines.jpg",
      title: "Respironics",
      text: "They offer user-friendly and innovative sleep therapy devices, ventilators, and oxygen concentrators. With a commitment to quality, innovation, and patient care..",
      linkText: "View Respironics",
      linkTo: "/category/Respironics",
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
                linkTo={article.linkTo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
