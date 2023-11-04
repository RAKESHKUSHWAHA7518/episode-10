
import { LOGO_URL } from "../utils/constants";

import { useState,useEffect } from "react";

import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";


const Header =() =>{

    const onlineStatus = useOnlineStatus();

    // let btnName = "Login";

    const  [btnNameReact,setBtnNameReact] =useState("Login");

    useEffect(() =>{
        console.log("useEffect")
    })


    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src= {LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul>

                    <li>Status:{onlineStatus ? "on":"off"}</li>

                 

                <li>< Link to="/" > Home </Link> </li> 
                 
                   <li>< Link to="/about" >About us </Link> </li> 
                   <li> <Link to="/contact">Contact Us</Link> </li> 
                   <li> <Link to="/grocery">Grocery</Link> </li> 
                   <li> Cart </li> 

                   <button className="login" onClick={()=>{
                    btnNameReact==="login" ? setBtnNameReact("logout") :setBtnNameReact("login");
                    console.log((btnNameReact))
                   }}
                  

                   >{btnNameReact}</button>
                    
                </ul>
            </div>

        </div>
    )
}


export default Header ;