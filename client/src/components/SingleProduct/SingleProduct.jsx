import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import {fetchDataFromApi} from "../../utils/app"
import { Context } from "../../utils/context";
import { useContext,useEffect, useState} from "react";
// import useFetch from "../../hooks/useFetch";


const SingleProduct = () => {
const {handleAddToCart}=useContext(Context)
  
  const {id} =useParams();
  // const {data, loading, error}=useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const{products,setProducts}=useContext(Context);
  const [loading, setLoading] = useState(true);
  
  const filterData=async (url) => {
//     fetchDataFromApi(`/api/products?populate=*&[filters][id]=${id}`)
//     .then((res)=>{console.log(res)
//         setProducts(res)

// });
url=`/api/products?populate=*&[filters][id]=${id}`;
try {
  setLoading(true);
  const res = await fetchDataFromApi(url);
  console.log(res);
  setProducts(res);
} finally {
  setLoading(false);
}
if (loading) {
  return <div>Loading...</div>; // or any other loading indicator
}
}

useEffect(() =>{
  filterData();
  
},[id]);

const [quantity,setQuantity] =useState(1);  
const increment =()=>{
    setQuantity((prevState)=>prevState+1);
    }
    const decrement =()=>{
      setQuantity((prevState)=>prevState>1?prevState-1:1)
  };
  if (loading) {
    return <div>Loading...</div>;
  }


  const item=products?.data[0]?.attributes;
  if(item){
  console.log("item is available");
  }
  const imageUrl = item?.img?.data?.[0]?.attributes?.url
    ? process.env.REACT_APP_DEV_URL + item.img.data[0].attributes.url
    : '';

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={imageUrl} alt="" />
          </div>
          <div className="right">
            <span className="name">{item?.title}</span>
            <span className="price">&#8377;{item?.price}</span>
            <span className="desc">{item?.desc}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={()=>decrement()}>-</span>
                <span>{quantity}</span>
                <span onClick={()=>increment()}>+</span>
              </div>
              <button className="add-to-cart-btn" onClick={()=>{handleAddToCart(products?.data[0],quantity); setQuantity(1)}}>
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:
                <span> {item?.categories?.data[0]?.attributes?.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebook size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedin size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts productsId={id}
            categoryId={item?.categories?.data[0]?.id}
            />
      </div>
    </div>
  );
};

export default SingleProduct;
