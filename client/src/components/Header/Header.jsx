import "./Header.scss";
import { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
const Header = () => {
  const {cartCount}=useContext(Context);
  const [showCart,setShowCart]=useState(false);
  const [showSearch,setShowSearch]=useState(false);
  const navigate=useNavigate();
  const param=useParams();
  return (<>
    <header className="main-header">
      <div className="header-content">
        <ul className="left">
          <li onClick={()=>{navigate("/")}}>Home</li>
          <li>About</li>
          <li onClick={()=>{navigate("/")}}>Categories</li>
        </ul>
        <div className="center" onClick={()=>{navigate("/")}}>E-Store</div>
        <div className="right">
          <TbSearch  onClick={()=>setShowSearch(true)}/>
          <AiOutlineHeart />
          <span className="cart-icon" onClick={()=>setShowCart(true)}>
            <CgShoppingCart />
            {!!cartCount && <span>{cartCount}</span>}
          </span>
        </div>
      </div>
    </header>
    {showCart&&<Cart setShowCart={setShowCart}/>}
    {showSearch&&<Search setShowSearch={setShowSearch}/>}
    </>);
};

export default Header;
