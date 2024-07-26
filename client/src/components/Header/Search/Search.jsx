import "./Search.scss";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  let { data ,error} = useFetch(
    `/api/products?populate=*&[filters][title][$contains]=${query}`
  );
  const onSearch = (e) => {
    setQuery(e.target.value);
  };
  if (!query?.length) {
    data = null;
  } 
  else {
    console.log("Query:", query); // Debugging line
    console.log("Data:", data); // Debugging line
    console.log("Error:", error);
  }
  const navigate=useNavigate();
  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          id="search"
          autoFocus
          placeholder="Search for products"
          onChange={onSearch}
          value={query}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
         {data?.map((item) => (
            <div className="search-result-item" onClick={()=>{
              navigate("/products/"+item.id)
              setShowSearch(false)}
              } key={item.id}>
              <div className="img-container">
                <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    item?.attributes?.img?.data[0]?.attributes?.url
                  }
                  alt=""
                />
              </div>
              <div className="prod-details">
                <span className="name"><b>{item?.attributes?.title}</b></span>
                <span className="des">{item?.attributes?.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
