import "../pages/home.css"
import HelpCall from "./sections/helpcall";
import HomeSearch from "./sections/homesearch";
import Suggestion from "./sections/suggestion";
import Ways from "./sections/ways";
export const Home =() =>{
    return (
        <div className="body_home m-0 p-0">
            <div className="banner">
                <div className="disc">
                    {/* <img src="./public/banner.jpg"  alt="" /> */}
                    <p>"YOUR PICK OF RIDES <br /> AT LOW PRICES"</p>
                </div>
            </div>
                    {/* <SearchBar /> */}
                    <HomeSearch />
                    <Suggestion />
                    <Ways />
                    <HelpCall />
        </div>
    );
};