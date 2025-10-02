import { Outlet } from "react-router-dom";
import Header from "./Navbar";

const AppLayout2 = () =>{

    return <>
        <Header />
        <Outlet />
    </>

};
export default AppLayout2;