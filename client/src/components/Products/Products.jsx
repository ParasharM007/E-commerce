import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ innerPage, headingText,products}) => {
    // if (!products || !products.data) {
    //     return <div>No categories available</div>; // Handle case where data is not available
    // }
    return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products?.data?.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Products;
