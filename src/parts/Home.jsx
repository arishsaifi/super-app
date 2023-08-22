import React from "react";
import SignLeft from "../components/home/SignLeft";

import SignRight from "../components/home/SignRight";
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
       <div> <SignLeft style={left}/></div>
        <div><SignRight style={right}/></div>

        </section>
    //    <>
    //     {/* <SignLeft /> */}
    //     <SignupForm />
    //    </>
    )
}

export default Home

