import React from "react";
import logo from "../assets/signup.png"
const SignupImage = () =>{
    console.log(logo)
    return <>
        <p className="homeheading"> Discover new things on SuperApp</p>
        <img 
         style={{width:"50vw"}}
         src= {logo} 
         alt="image"
         />
    </>
}

export default SignupImage;