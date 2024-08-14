

import "./Offers.css";
import Exclusive from "../Image/exclusive_offer.png";



export default function Offers(){
    return (
        <>
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={Exclusive} alt="" />
            </div>
        </div>
        </>
    )
}