import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const NavBar: FC = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <Link className="navbar-brand js-scroll-trigger" to="/">Currency Converter - Anyfin</Link>

                <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                    type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item mx-0 mx-lg-1">
                            <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/login">Login</Link>

                        </li>

                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default NavBar;