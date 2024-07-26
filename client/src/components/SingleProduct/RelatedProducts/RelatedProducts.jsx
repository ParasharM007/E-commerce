// import { useContext, useEffect } from "react";
import Products from "../../Products/Products";
// import { fetchDataFromApi } from "../../../utils/app";
// import { Context } from "../../../utils/context";
import useFetch from "../../../hooks/useFetch";
const RelatedProducts = ({ productsId, categoryId }) => {
 const {data}=useFetch(`/api/products?populate=*&[filters][id][$ne]=${productsId}&[filters][categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
 );
  
  return (
    <div className="related-products">
      <Products products={{data}} headingText="Related Products" />
    </div>
  );
};

export default RelatedProducts;
