import { Link } from "react-router-dom";
import "./Hero.css";
export default function Hero(){
    return(
        <>
            <Link className="nav-link" to="/login"   style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#0d6efd", color: "white", textDecoration: "none", borderRadius: "6px"}}>
                Login
            </Link>
        </>
    )
}