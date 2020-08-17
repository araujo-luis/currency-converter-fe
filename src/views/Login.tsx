import React, { FC } from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";

const Home:FC = () => {

    return(
        <div>
            <NavBar/>
            <LoginForm/>
        </div>
    )
}

export default Home;