import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from "./pages/registers/users/Users";
import Products from "./pages/registers/products/Products";
import Site from "./pages/site/Site";
import Footer from "./components/footer/Footer";
import Pricing from "./components/pricing/Pricing";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/index";
import "./styles/global.scss";
import "./App.css"
import User from "./pages/registers/user/User";
import Product from "./pages/registers/product/Product";
import Clients from "./pages/registers/client/client";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Navbar from "./components/navbar/Navbar";
import Register from "./pages/register/index";


const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Site />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/clientes",
          element: <Clients />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Layout",
      element: <Layout />,
    },
    {
      path: "/price",
      element: <Pricing />,
    },
    {
      path:"/Register",
      element: <Register />
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;