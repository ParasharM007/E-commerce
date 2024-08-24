import Products from "../Products/Products";
import { useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import "./Category.scss";
import {fetchDataFromApi} from "../../utils/app"
import { Context } from "../../utils/context";
import useFetch from "../../hooks/useFetch";

const Category = () => {
  const{id}=useParams();
  const{products,setProducts}=useContext(Context);
  useEffect(() =>{
    getProductsforrescatg();

  },[]);
  
  const getProductsforrescatg=async() => {
      await fetchDataFromApi(`/api/products?populate=*&[filters][categories][id]=${id}`)
      .then((res)=>{console.log(res)
          setProducts(res)

});
}
  const data=products;
// const {data}=useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);
    return <div className="category-main-content">
        <div className="layout">
        <div className="category-title"  >
          {{data}?.data[0]?.attributes?.categories?.data[0]?.attributes?.title}
          <Products products={products} innerPage={true} />
           
            </div></div>
    </div>
};

export default Category;
