import React from "react";

const NavBar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">MusicStore</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse justify-content-center navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Productos</a>
                        <a className="nav-link" href="#">Cuerdas</a>
                        <a className="nav-link" href="#">Viento</a>
                        <a className="nav-link" href="#">Audio</a>
                        <a className="nav-link" href="#">Piano</a>
                        <a className="nav-link" href="#">Percusion</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

