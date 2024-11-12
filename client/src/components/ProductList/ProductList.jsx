import React from "react";
import { useParams } from "react-router-dom";
import CategoryArticle from "../CategoryArticle/CategoryArticle"; // Import CategoryArticle
import "./ProductList.css";
import { PuffLoader } from "react-spinners";
import useProductByCategory from "../../pages/hooks/useProductByCategory";

const ProductList = () => {
  // Get the category parameter from the URL
  const { category } = useParams();

  // Use the custom hook to fetch products by category
  const { data, isLoading, isError, refetch } = useProductByCategory(category);
  // console.log(data); //Logging the data

  // Loading state
  if (isLoading) {
    return (
      <div className="flexColCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  // Error state
  if (isError)
    return (
      <div style={{ marginTop:"9rem" }}>
        <h2 className="text-center" style={{ fontSize: "2em", color: "red" }}>Error While Fetching Products :(</h2>
      </div>
    );

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
              <div className="product-list-wrapper ">
                {data.products.map((product) => (
                  <div key={product.id} className="articles-list">
                    <div className="article-card">
                      <CategoryArticle
                        imgSrc={product.image}
                        title={product.name}
                        linkText="Get More Detail"
                        linkTo={`/product/${product.id}`}
                      />
                    </div>
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
