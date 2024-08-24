import "./CartItem.scss";
import { useState,useContext} from "react";

import { MdClose } from "react-icons/md";
// import prod from "../../../assets/products/earbuds-prod-1.webp";
import { Context } from "../../../utils/context";
const CartItem = () => {
  const {handleCartProductQuantity,handleRemoveToCart,cartItems
  }=useContext(Context)
  const [quantity,setQuantity] =useState(1);  

  const increment =()=>{
    setQuantity((prevState)=>prevState+1);
    }
    const decrement =()=>{
      setQuantity((prevState)=>prevState>1?prevState-1:1)
  };
  return (
    <div className="cart-products">
      {cartItems.map(item=>(

        <div key={item.id} className="cart-product">
        <div className="img-container">
          <img src={process.env.REACT_APP_DEV_URL+item?.attributes?.img?.data[0]?.attributes?.url} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">{item.attributes.title}</span>
          <MdClose className="close-btn" onClick={()=>handleRemoveToCart(item)}/>
          <div className="quantity-buttons">
            <span onClick={()=>handleCartProductQuantity("dec",item)}>-</span>
            <span>{item.attributes.quantity}</span>
            <span onClick={()=>handleCartProductQuantity("inc",item)}>+</span>
          </div>
          <div className="text">
            <span>{item.attributes.quantity}</span>
            <span>x</span>
            <span >&#8377; {item.attributes.price}</span>
            <span className="highlight" >= &#8377; {item.attributes.quantity*item.attributes.price}</span>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default CartItem;
