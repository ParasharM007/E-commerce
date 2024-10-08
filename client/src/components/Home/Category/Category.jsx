import { useNavigate } from "react-router-dom";
import "./Category.scss";
const Category = ({categories}) => {
    console.log(categories)
    // if (!categories || !categories.data) {
    //     return <div>No categories available</div>; // Handle case where data is not available
    // }
    const navigate=useNavigate();
    return <div className="shop-by-category">
        <div className="categories">
            
            {categories?.data?.map((item)=>(

            <div key={item.id} className="category" onClick={()=>navigate(`/category/${item.id}`)}>
                <img src={process.env.REACT_APP_DEV_URL+item.attributes.img.data.attributes.url} alt="" />
                <span className="cat-title">{item.attributes.title}</span>
                </div>
            ))}
           

            </div>
        </div>
};

export default Category;
