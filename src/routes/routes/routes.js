import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllProducts from "../../pages/AllProducts/AllProducts";
import Cart from "../../pages/Cart/Cart";
import CustomerOrders from "../../pages/CustomerOrders/CustomerOrders";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import Register from "../../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "all-products", element: <AllProducts /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: ":id/cart", element: <Cart /> },
      { path: ":id/orders", element: <CustomerOrders /> },
    ],
  },
]);

export default router;
