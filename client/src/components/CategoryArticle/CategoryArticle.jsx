import React from "react";
import "./CategoryArticle.css";
import "./Utilities.css";
import { NavLink } from "react-router-dom";

const CategoryArticle = ({ imgSrc, title, text, linkText, linkTo }) => (
  <article className="articles-item" style={{ margin: "20px" }}>
    <div className="item-img ">
      <img src={imgSrc} alt={title} />
    </div>
    <div className="item-body">
      <div className="item-title">{title}</div>
      <div className="text">
        {text} 
      </div>
      <NavLink
        to={linkTo}
        className="item-link text-blue d-flex align-items-baseline"
      >
        <span className="item-link-text">{linkText}</span>
        <span className="item-link-icon">
          <i className="fas fa-arrow-right"></i>
        </span>
      </NavLink>
    </div>
  </article>
);

export default CategoryArticle;
