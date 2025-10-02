// import '../pages/admin.css'
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleSuccess } from "./utils";
import Sidebar from "../Admin/Sidebar";
import Headeradmin from "../Admin/Header";

export const Admin = () => {
  useEffect(() => {
    const link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "https://unpkg.com/@webpixels/css@1.1.5/dist/index.css";
    document.head.appendChild(link1);
    // return () => {
    //   document.head.removeChild(link1);
    // };
  }, []);



  return (
    <div className="admin-page">
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <Sidebar />
    
        {/* <!-- Main content --> */}
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          {/* <!-- Header --> */}
          <Headeradmin />
          {/* <!-- Main --> */}
          <main className="py-6 bg-surface-secondary">
              <Outlet />
          </main>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
