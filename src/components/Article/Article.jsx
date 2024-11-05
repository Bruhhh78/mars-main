import React from "react";
import "./Article.css";
import "./Utilities.css";

const Article = ({ imgSrc, title, text, linkText, linkHref }) => (
    <article className="articles-item" style={{margin:"10px"}}>
      <div className="item-img">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="item-body">
        <div className="item-title">{title}</div>
        <p className="text">{text}</p>
        <a href={linkHref} className="item-link text-blue d-flex align-items-baseline">
          <span className="item-link-text">{linkText}</span>
          <span className="item-link-icon">
            <i className="fas fa-arrow-right"></i>
          </span>
        </a>
      </div>
    </article>
  );
  

export default Article;
