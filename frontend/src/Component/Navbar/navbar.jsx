

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Image/logo.png";
import Card from "../Image/card-icon.png";
import '../Navbar/navbar.css';




export default function Navbar(){

    const [menu, setMenu] = useState("shop");

    return (
        <>
        <div className="navbar">
            <div className="nav-logo">
                <img src = {Logo} height="100px"/>
                <p>SHOPPER</p>
           </div>
           <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration : 'none'}} to='/' > Shop </Link> {menu === "shop" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu("Mens")}}><Link style={{textDecoration : 'none'}} to='/mens'> Men </Link> {menu === "Mens" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu("Woms")}}><Link style={{textDecoration : 'none'}} to='/womens'> Women </Link> {menu === "Woms" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration : 'none'}} to='/Kids'> Kid </Link> {menu === "Kids" ? <hr/> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/loginsignup'> <button>Login</button> </Link> 
                <Link to='/card'><img src={Card} height="50px" alt=""/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
        </>
    )
}



