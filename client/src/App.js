import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
function App() {
  return (
    <div>
      <Router>
        <AppContext>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/category/:id" element={<Category />} />
            <Route exact path="/products/:id" element={<SingleProduct />} />
          </Routes>
          <Newsletter />
          <Footer />
        </AppContext>
      </Router>
    </div>
  );
}

export default App;
