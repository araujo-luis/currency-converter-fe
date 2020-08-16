import React, { FC } from "react";
import NavBar from "../components/NavBar";
import SearchForm from "../components/SearchForm";

const Home:FC = () => {

    return(
        <div>
            <NavBar/>
            <SearchForm/>
        </div>
    )
}

export default Home;