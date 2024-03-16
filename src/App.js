import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Layout from "./components/Layout";
import Login from "./features/users/Login";
import Register from "./features/users/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import SingleCategory from "./features/products/SingleCategory";
import SingleProduct from "./features/products/SingleProduct";
import Cart from "./features/cart/Cart";
import SearchResults from "./components/SearchResults";
import ForgotPassword from "./features/users/ForgotPassword";
import AllProducts from "./features/products/AllProducts";
import AllCategories from "./features/products/AllCategroies";
import Successful from "./components/Successful";
import Cancel from "./components/Cancel";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}></Route>
          <Route path="products">
            <Route index element={<AllCategories />} />
            <Route path=":searchItem/:productId" element={<SingleProduct />} />
            <Route path="category/:category" element={<SingleCategory />} />
            <Route
              path="category/:category/:productId"
              element={<SingleProduct />}
            />
            <Route path=":searchItem" element={<SearchResults />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/successful" element={<Successful />} />
          <Route path="/cancel" element={<Cancel />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
