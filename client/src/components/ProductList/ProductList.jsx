import React from "react";
import { useParams } from "react-router-dom";
import useProductByCategory from "../../hooks/useProductByCategory";
import CategoryArticle from "../CategoryArticle/CategoryArticle"; // Import CategoryArticle
import "./ProductList.css";
import "./Utilities.css";

const ProductList = () => {
  // Get the category parameter from the URL
  const { category } = useParams();

  // Use the custom hook to fetch products by category
  const { data, isLoading, isError, refetch } = useProductByCategory(category);
  console.log(data);

  // Loading state
  if (isLoading) return <p>Loading...</p>;

  // Error state
  if (isError) return <p>Error loading products. Please try again.</p>;

  return (
    <section className="sc-articles">
      <div className="articles-shape">
        <img src="/curve-shape-2.png" alt="" />
      </div>
      <div className="container">
        <div className="articles-content">
          <div className="title-box text-center">
            <div className="content-wrapper">
              <h2 style={{ fontSize: "2em", color: "rgb(135, 135, 169)" }}>
                Products in {category} Category
              </h2>
              <div className="title-separator mx-auto"></div>
            </div>
          </div>
          <div>
            {/* Check if there are products to display */}
            {data && data.products && data.products.length > 0 ? (
              <div className="product-list-wrapper">
                {data.products.map((product) => (
                  <div key={product.id} className="article-wrapper articles-list d-flex flex-wrap justify-content-center ">
                    <CategoryArticle
                      imgSrc={product.image}
                      title={product.name}
                      text={
                        <div>
                          {Object.entries(product.specs).map(([key, value]) => (
                            <div key={key}>
                              <strong>{key}: </strong>{value}
                            </div>
                          ))}
                        </div>
                      }
                      linkText="Get More Detail"
                      linkTo={`/product/${product.id}`}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p>No products found in this category.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
