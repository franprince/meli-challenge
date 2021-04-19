import * as React from "react";

function Product({ productData }) {
  const [moreDetails, setMoreDetails] = React.useState(false);
  const [currentPicture, setCurrentPicture] = React.useState(0);
  return productData.status === "fullfilled" ? (
    <>
      <div className="product-box">
        <h1 className="product-name">{productData.data.name}</h1>
        <div className="product-wrapper">
          <div className="product-gallery-container">
            <div className="thumbnail-container">
              {productData.data.pictures.map((picture, index) => (
                <img
                  key={picture.url}
                  className="product-thumbnail"
                  src={picture.url}
                  alt={`${productData.data.name} miniatura ${index}`}
                  onMouseEnter={() => setCurrentPicture(index)}
                />
              ))}
            </div>
            <div className="product-image-container">
              <img
                className="product-image"
                src={productData.data.pictures[currentPicture].url}
                alt={productData.data.name}
              />
            </div>
          </div>

          <div className="product-data-container">
            <ul>
              {productData.data.attributes.slice(3, 8).map((attribute) => {
                return (
                  <li key={attribute.value_id}>
                    {attribute.name}: {attribute.value_name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {productData.data.attributes.slice(8).length ? (
          <button
            className="toggle-more-info"
            onClick={() => setMoreDetails(!moreDetails)}
          >
            {moreDetails ? "Ver menos detalles ▲" : "Ver más detalles ▼"}
          </button>
        ) : null}
      </div>

      {moreDetails && (
        <div className="product-more-details">
          <ul>
            {productData.data.attributes.slice(8).map((attribute, index) => {
              return (
                <li key={index + attribute.value_id}>
                  {attribute.name}: {attribute.value_name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  ) : productData.status === "pending" ? (
    <p>Buscando...</p>
  ) : productData.status === "error" ? (
    <p>{productData.error}</p>
  ) : null;
}

export default Product;
