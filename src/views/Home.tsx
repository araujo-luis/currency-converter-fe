import React, { FC } from "react";
import NavBar from "../components/NavBar";
import SearchForm from "../components/SearchForm";
import SelectedCountries from "../components/SelectedCountries";

const Home:FC = () => {

    return(
        <div>
            <NavBar/>
            <SearchForm/>
            <SelectedCountries/>
        </div>
    )
}

export default Home;