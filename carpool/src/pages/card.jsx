import blogData from "../pages/apis/blog.json";
import { Blog } from "./blog";

const Card = () => {
    return(
        <ul className="container my-5">
            <h1 style={{fontFamily:'Nova Round'}}>Blog</h1>
            <div className="row g-4">
            {blogData.map((curElem) =>  (
                <Blog key={curElem.id} curElem ={curElem}/>
            )
            )}
            </div>
        </ul>
    );
};

export default Card;