import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../../layout/DashBoard";
import Main from "../../layout/Main";
import AddCustomer from "../../pages/AddCustomer/AddCustomer";
import AddProduct from "../../pages/AddProduct/AddProduct";
import AdminOrderList from "../../pages/AdminOrderList/AdminOrderList";
import AdminProductList from "../../pages/AdminProductList/AdminProductList";
import AllCustomers from "../../pages/AllCustomers/AllCustomers";
import AllProducts from "../../pages/AllProducts/AllProducts";
import Cart from "../../pages/Cart/Cart";
import CustomerOrders from "../../pages/CustomerOrders/CustomerOrders";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      {
        path: "all-products",
        element: <AllProducts />,
        loader: async () => fetch("http://localhost:5000/api/v1/products"),
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/api/v1/products/${params.id}`),
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: ":id/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      { path: ":id/orders", element: <CustomerOrders /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      {
        index: true,
        element: <AllCustomers />,
        loader: async () => fetch("http://localhost:5000/api/v1/users"),
      },
      {
        path: "/dashboard/orders-list",
        element: <AdminOrderList />,
      },
      {
        path: "/dashboard/product-list",
        element: <AdminProductList />,
        loader: async () => fetch("http://localhost:5000/api/v1/products"),
      },
      {
        path: "/dashboard/add-costomer",
        element: <AddCustomer />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;
