import { Outlet } from "react-router-dom";
import Header from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

const AppLayout = ({loggedInUser , setLoggedInUser , setAuthenticat, setRole}) =>{
    return (
    <>
        <Header loggedInUser={loggedInUser}
        setloggedInUser={setLoggedInUser} // <-- match Header’s prop name
        setAuthenticat={setAuthenticat}
        setRole= {setRole} 
        />
        <Outlet />
        <Footer />
        <ToastContainer position="top-right" autoClose={2000} />
    </>
    )
};

export default AppLayout;