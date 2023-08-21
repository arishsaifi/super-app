import React from "react";
import SignupImage from "../components/SignupImage";
import SignupForm from "../components/SignupForm"

const Home = () => {

    const main = {
        width:"100%",
        display : "flex"
    }
    const left = {
       width:"50%",
        float : "left",
    }
    const right = {
        width:"50%",
        float : "right"
    }

    return (
        <section style={main} >
       <div> <SignupImage style={left}/></div>
        <div><SignupForm style={right}/></div>

        </section>
       
    )
}

export default Home

