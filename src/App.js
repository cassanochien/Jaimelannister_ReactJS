import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartProvider from "./Context/cartContext";
import AdminPage from "./Pages/AdminPage/AdminPage";
import ManageProducts from "./Pages/AdminPage/ManageProducts";
import ManageUser from "./Pages/AdminPage/ManageUsers";
import CheckOut from "./Pages/CheckOutPage/CheckOut";
import ListEvaluate from "./Pages/HelpPage/listEvaluate";
import HomePage from "./Pages/HomePage/HomePage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import UserProfile from "./Pages/UserProfile/UserProfile";
import PublicLayout from "./Pages/public_layout";
import Login from "./Pages/LoginandSignup/Login";
import Signup from "./Pages/LoginandSignup/Signup";

function App() {
  const initialOptions = {
    "client-id":
      "AbvWp_3ytM4qeNm-B8JB4YQy0UR310S7MZEhwuBvlREtt-GnMbUh-LDWCm08I7OMmpwsmvgnobj5Kyz6",
    currency: "USD",
    intent: "capture",
  };
  return (
    <CartProvider>
      <div className="App">
        <div className="">
          <Routes>
            <Route path="/" element={<PublicLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/help" element={<ListEvaluate />} />
              <Route
                path="/checkout"
                element={
                  <PayPalScriptProvider options={initialOptions}>
                    <CheckOut />
                  </PayPalScriptProvider>
                }
              />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>

            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/managerproduct" element={<ManageProducts />} />
            <Route path="/admin/manageruser" element={<ManageUser />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
