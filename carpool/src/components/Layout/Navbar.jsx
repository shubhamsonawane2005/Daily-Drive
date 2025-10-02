import {  NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import { handleSuccess } from "../../pages/utils";
import { ToastContainer } from "react-toastify";

const Header = ({ loggedInUser, setloggedInUser, setAuthenticat }) => {
  const navigate = useNavigate();



  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    // localStorage.removeItem("role")
    setloggedInUser(""); // reset state
    setAuthenticat(false)

    
    setTimeout(() => {
      handleSuccess("Logout successfully!")
      navigate('/login', {replace:true})
    },1000)
  };

  return (
    <nav className="containe m-0 p-0">
      <div className="logo">
        <NavLink to="/">
          <img src="./public/logo.svg" alt="" />
        </NavLink>
      </div>

      <div className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <i className="bi bi-house-door"> Home</i>
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <i className="bi bi-search"> Search</i>
        </NavLink>
        <NavLink
          to="/publish"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <i className="bi bi-plus-circle"> Publish Ride</i>
        </NavLink>
        <NavLink
          to="/ContectUs"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <i className="bi bi-person-circle"> Contact Us</i>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <i className="bi bi-chat-left-text">Blog</i>
        </NavLink>
      </div>

      <div className="nav_btn">
        {loggedInUser ? (
          <>
            <i className="bi bi-person-circle" style={{ fontSize: "24px" ,marginRight:"3px",marginTop:"10px"}}></i>
            <span className="mt-3">{loggedInUser}</span>
            <button className="btn1 btn_lg ms-3" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <i
              className="bi bi-box-arrow-in-right"
              style={{fontSize: "24px"  }}
            ></i>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "nav-link active " : "nav-link"
              }
            >
              {" "}
              Login/Sign Up
            </NavLink>
          </>
        )}
        <ToastContainer />
      </div>
    </nav>
  );
};

export default Header;
