import { Navigate } from "react-router-dom";
import DashboardLayout from "src/components/DashboardLayout";
import MainLayout from "src/components/MainLayout";
import Account from "src/pages/Account";
import CustomerList from "src/pages/CustomerList";
import Dashboard from "src/pages/Dashboard";
import Login from "src/pages/Login";
import NotFound from "src/pages/NotFound";
import ProductList from "src/pages/ProductList";
import Register from "src/pages/Register";
import Settings from "src/pages/Settings";
import AddBlog from "src/pages/AddBlog.js";
import AllBlogs from "src/pages/AllBlogs.js";
import Blog from "src/pages/Blog.js";

import SignIn from "src/pages/SignIn";

const routes = [
  {
    path: "app",
    element: <DashboardLayout />,
    children: [
      { path: "account", element: <Account /> },
      { path: "customers", element: <CustomerList /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "products", element: <ProductList /> },
      { path: "settings", element: <Settings /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "addblog", element: <AddBlog /> },
      { path: "allblogs", element: <AllBlogs /> },
      { path: "blog", element: <Blog /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "signin", element: <SignIn /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "404", element: <NotFound /> },
      { path: "/", element: <Navigate to="/app/dashboard" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
