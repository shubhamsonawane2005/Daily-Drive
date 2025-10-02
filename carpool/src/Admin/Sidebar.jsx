import React from "react";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../pages/utils";


const Sidebar = () => {
  
      const navigate = useNavigate();
      const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("role")

      
      setTimeout(() => {
        navigate('/login', {replace:true})  
        handleSuccess("Logout successfully!")
      },1000)
    };

    const handleUser = () => {
        navigate("user" , {replace:true})
    }
    const handleall = () => {
        navigate("/admin" , {replace:true})
    }
    
  return (
    <nav
      className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
      id="navbarVertical"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler ms-n2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarCollapse"
          aria-controls="sidebarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
          <img src="/logo.svg" alt=".." />
        </a>

        {/* <!-- Collapse --> */}
        <div className="collapse navbar-collapse" id="sidebarCollapse">
          {/* <!-- Navigation --> */}
          <ul className="navbar-nav m-0 p-0" style={{ listStyle: "none" ,cursor:"pointer"}}>
            <li className="nav-item">
              <a
                className="nav-link d-flex  gap-2 py-1 fs-6 "
                style={{ alignItems: "end" }}
              >
                <i className="bi bi-house"></i>
                <span onClick={handleall}  >Dashboard</span>
                
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link d-flex  gap-2 py-1 fs-6"
                style={{ alignItems: "end" }}
              >
                <i className="bi bi-chat"></i>
                <span>Messages</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link d-flex  gap-2 py-1 fs-6"
                style={{ alignItems: "end" }}
              >
                <i className="bi bi-car-front"></i>
                <span>Rides</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link d-flex  gap-2 py-1 fs-6"
                style={{ alignItems: "end" }}
              >
                <i className="bi bi-people"></i>
                <span onClick={handleUser}>Users</span>
              </a>
            </li>
          </ul>

          {/* <!-- Divider --> */}
          <hr className="navbar-divider my-5 opacity-20" />
          {/* <!-- Navigation --> */}

          {/* <!-- Push content down --> */}
          {/* <!-- <div className="mt-auto"></div> --> */}
          {/* <!-- User (md) --> */}
          <ul className="navbar-nav m-0 p-0" style={{cursor:"pointer"}}>
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center gap-2 py-1"
                // href="/login"
              >
                <i className="bi bi-person-square"></i>
                <span>Account</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2 py-1">
                <i className="bi bi-box-arrow-left"></i>

                <span onClick={handleLogout}>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
