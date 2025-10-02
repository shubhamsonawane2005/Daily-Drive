import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "../pages/login.css";
import "react-toastify/dist/ReactToastify.css";
import { handleError, handleSuccess } from "./utils";
const Login = ({setAuthenticat, setLoggedInUser ,setRole}) => {
  const navigate = useNavigate();
  const [isRightPanelActive, setRightPanelActive] = useState(false);

  
  // Register form
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Password: "",
    Phone:"",
    City:""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const copyInfo = { ...user };
    copyInfo[name] = value;
    setUser(copyInfo);
  };

  const handleRgerster = async (e) => {
    e.preventDefault();

    const { Name, Email, Password ,Phone , City} = user;
    if (!Name || !Email || !Password || !Phone || !City ) {
      return handleError("All filed Required");
    }
    try {
      const url = "http://localhost:5000/register";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: Name,
          email: Email,
          password: Password,
          phone:Phone,
          city:City
        }),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          setRightPanelActive(false);
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      }
      console.log(result);
    } catch (err) {
      console.error(err);
      handleError(err);
    }
  };

  //Login Form
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    const copyInfo = { ...userLogin };
    copyInfo[name] = value;
    setUserLogin(copyInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userLogin;

    try {
      const url = "http://localhost:5000/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const result = await response.json();
      const { success, message, token, error, name, role  } = result;
      if (success) {
        localStorage.setItem("token", token);
        localStorage.setItem("loggedInUser", name);
        localStorage.setItem("role", role);

        setAuthenticat(true);
        setLoggedInUser(name);
        setRole(role)
        
        
        setTimeout(() => {

          if (role === "admin") {
            window.location.href = "/admin";
            // navigate("/admin", { replace: true });
            handleSuccess("welcome admin");
            
          } else {
            handleSuccess(message)
            navigate("/", { replace: true });
          }
          
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message || message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      console.error(err);
      handleError(err);
    }
  };

  return (
    <div className="body_login m-0 p-0 ">
      <div
        className={`container ${
          isRightPanelActive ? "right-panel-active" : "left-panel-active"
        }`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form onSubmit={handleRgerster}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              name="Name"
              placeholder="Name"
              value={user.Name}
              onChange={handleInputChange}
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={user.Email}
              onChange={handleInputChange}
              required
            />

            <input
              type="password"
              name="Password"
              placeholder="Password"
              value={user.Password}
              onChange={handleInputChange}
              required
            />

            <input
              type="phone"
              name="Phone"
              placeholder="Phone"
              value={user.Phone}
              onChange={handleInputChange}
              required
            />
            
             <input
              type="City"
              name="City"
              placeholder="City"
              value={user.City}
              onChange={handleInputChange}
              required
            />

            <button>Sign up</button>
          </form>
        </div>

        {/* //Login Form */}
        <div className="form-container login-container">
          <form className="formLogin" onSubmit={handleLogin}>
            <h1>Login </h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              name="email"
              value={userLogin.email}
              onChange={handleLoginChange}
              placeholder="Email"
            />

            <input
              type="password"
              name="password"
              value={userLogin.password}
              onChange={handleLoginChange}
              placeholder="Password"
            />

            <a href="#">Forgot your password?</a>
            <button>Login</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back✨</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => {
                  console.log("login clicked");
                  setRightPanelActive(false);
                }}
                className="ghost"
                id="login"
              >
                Login
              </button>
            </div>

            <div className="overlay-panel overlay-right">
              <h1>Hello Friend ✨</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                type="button"
                onClick={() => {
                  console.log("sign up clicked");
                  setRightPanelActive(true);
                }}
                className="ghost"
                id="signup"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer className="toastbtn" />
    </div>

    // animation code
  );
};

export default Login;
