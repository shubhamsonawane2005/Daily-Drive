import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import Login from "./pages/Login";
import Search from "./pages/Search";
import ContectUs from "./pages/ContectUs";
import AppLayout2 from "./components/Layout/AppLayout2";
import Card from "./pages/card";
import { Admin } from "./pages/Admin";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Refresh from "./Refresh";
import Users from "./Admin/Users";
import Index from "./Admin/index"
import Publish from "./pages/publish";

export const App = () => {
  const [isAuthenticat, setAuthenticat] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [role , setRole] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("loggedInUser");
    const saveRole = localStorage.getItem("role")

    if (token) {
      setAuthenticat(true);
      setLoggedInUser(user || "");
      setRole(saveRole || "user")

    } else {
      setAuthenticat(false);
      setLoggedInUser("");
      setRole("")

    }
  }, []);
  const PrivateRout = ({ element }) => {
    return isAuthenticat ? element : <Navigate to="/login" replace />;
  };

  const AdminRoute = ({ element }) => {
        const role = localStorage.getItem("role"); 
        return role === "admin" ? element : <Navigate to="/" replace />; 
      };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AppLayout
          setAuthenticat={setAuthenticat}
          setLoggedInUser={setLoggedInUser}
          loggedInUser={loggedInUser} 
        />
      ),
      children: [
        {
          path:"/",
          element: <PrivateRout element={<Home />}  />,
        },
        {
          path:"/publish",
          element:<PrivateRout element={<Publish />} />
        },

        {
          path: "/contectUs",
          element: <PrivateRout element={<ContectUs />} />,
        },
        {
          path: "/about",
          element: <PrivateRout element={<About />} />,
        },
        {
          path: "/blog",
          element: <PrivateRout element={<Card />} />,
        },
      ],
    },
    {
      path: "/search",
      element: <PrivateRout element={<AppLayout2 />} />,
      children: [
        {
          path: "/search",
          element: <Search />,
        },
      ],
    },
    {
      path: "/login",
      element: isAuthenticat ? (
        <Navigate to="/" replace />
      ) : (
        <Login
          setAuthenticat={setAuthenticat}
          setLoggedInUser={setLoggedInUser}
          setRole={setRole}
        />
      ),
    },
      {
      path: "/admin",
      element: (<AdminRoute element={<Admin />}  />),
      children:[
        {
          index:true,
          // path:"index"
          element: <Index />
        },
        {
          path: "user",
          element: <Users />
        },
      ]
    },
  ]);

  return (
    <RouterProvider
      router={router}
      fallbackElement={<Refresh setAuthenticat={setAuthenticat} />}
    />
  );
};
