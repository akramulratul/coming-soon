import React from "react";
import '../styles/Logo.css';
// import "../styles/ComingSoon.css";

export const Logo =({ alt , src }) => {
    return(
        <div className="logo-container">
<img className="logo" alt={alt} src={src}/>
        </div> 
    )
}
