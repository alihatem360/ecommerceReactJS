import Home from "./Pages/Home/HomePage";
import ShopProducsPage from "./Pages/Products/ShopProducsPage";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import Footer from "./Components/Utility/Footer";
import ProductDetalisPage from "./Pages/Products/ProductDetalisPage";
import LoginPage from "./Pages/Auth/LoginPage";
import CartPage from "./Pages/Cart/CartPage";
import Rigester from "./Pages/Auth/RigesterPage";
import AdminAllOrdersPage from "./Pages/Admin/AdminAllOrdersPage";
import AdminAllProductsPage from "./Pages/Admin/AdminAllProductsPage";
import AllBrandPage from "./Pages/Brand/AllBrandPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import AdminAddrandPage from "./Pages/Admin/AdminAddrandPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminSubCategoryPage from "./Pages/Admin/AdminSubCategoryPage";
import AdminAddProductsPage from "./Pages/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./Pages/User/UserAllOrdersPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserFavoriteProductPage from "./Pages/User/UserFavoriteProductPage";
import UserAllAddressPage from "./Pages/User/UserAllAddressPage";
import UserAddAddressPage from "./Pages/User/UserAddAddressPage";
import UserEditAddressPage from "./Pages/User/UserEditAddressPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import ChoosePayMethoudPage from "./Pages/Checkout/ChoosePayMethoudPage";
import AdminOrderDetalisPage from "./Pages/Admin/AdminOrderDetalisPage";
import AdminEditeProductPage from "./Pages/Admin/AdminEditeProductPage";
import ForgetPasswordPage from "./Pages/Auth/ForgetPasswordPage";
import UserVerifyCodePage from "./Pages/Auth/UserVerifyCodePage";
import ResetPasswordresetPage from "./Pages/Auth/ResetPasswordresetPage";
import AdminCreateCouponPage from "./Pages/Admin/AdminCreateCouponPage";
import AdminEditCouponPage from "./Pages/Admin/AdminEditCouponPage";
import AllProductsByCatigoryPage from "./Pages/Products/AllProductsByCatigoryPage";
import AllProductsByBrandPage from "./Pages/Brand/AllProductsByBrandPage";
// ProtectedRouteHook
import ProtectedRouteHook from "./customHook/auth/protected-route-hook";
// ProtectedRoute
import ProtectedRoute from "./Components/Utility/ProtectedRoute";
function App() {
  const [isUser, isAdmin, userDetails] = ProtectedRouteHook();

  return (
    <div className="font">
      <BrowserRouter>
        <NavBarLogin />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<ShopProducsPage />} />
          <Route path="/products/:id" element={<ProductDetalisPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<Rigester />} />
          <Route path="/allbrands" element={<AllBrandPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          {
            // route to all products by category
          }
          <Route
            path="/products/allCategory/:id"
            element={<AllProductsByCatigoryPage />}
          />

          <Route
            path="/products/allBrand/:id"
            element={<AllProductsByBrandPage />}
          />
          <Route path="/user/forgetPassword" element={<ForgetPasswordPage />} />

          <Route path="/user/verify-code" element={<UserVerifyCodePage />} />

          <Route
            path="/user/reset-password"
            element={<ResetPasswordresetPage />}
          />

          {
            // admin routes
          }
          <Route element={<ProtectedRoute auth={isAdmin} />}>
            <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
            <Route
              path="/admin/allproducts"
              element={<AdminAllProductsPage />}
            />
            <Route path="/admin/addbrand" element={<AdminAddrandPage />} />
            <Route
              path="/admin/addcategory"
              element={<AdminAddCategoryPage />}
            />
            <Route
              path="/admin/addsubcategory"
              element={<AdminSubCategoryPage />}
            />
            <Route
              path="/admin/addproducts"
              element={<AdminAddProductsPage />}
            />
            <Route
              path="/admin/orders/23"
              element={<AdminOrderDetalisPage />}
            />
            <Route
              path="/admin/addCoupon"
              element={<AdminCreateCouponPage />}
            />

            <Route
              path="/admin/edit-coupon/:id"
              element={<AdminEditCouponPage />}
            />
            <Route
              path="/admin/editproducts/:id"
              element={<AdminEditeProductPage />}
            />
          </Route>

          {
            // user routes
          }
          <Route element={<ProtectedRoute auth={isUser} />}>
            <Route path="/user/allOrders" element={<UserAllOrdersPage />} />
            <Route
              path="/user/favorite"
              element={<UserFavoriteProductPage />}
            />
            <Route path="/user/address" element={<UserAllAddressPage />} />
            <Route path="/user/add-address" element={<UserAddAddressPage />} />
            <Route
              path="/user/edit-address/:id"
              element={<UserEditAddressPage />}
            />
            <Route path="user/user-profile" element={<UserProfilePage />} />
            <Route
              path="/order/paymethoud"
              element={<ChoosePayMethoudPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
