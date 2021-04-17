import React, { Component } from 'react';

// Stateless Functional Component
const Navbar = props => {

    console.log( 'NavBar Rendered' );
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Neo-Crypto
                        <span className={setBadgeClass( props.totalCounters )}>
                        {props.totalCounters}
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Market</a>
                        <a className="nav-link" href="#">Features</a>
                        <a className="nav-link" href="#">Pricing</a>
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;

const setBadgeClass = count => {
    let classes = "badge badge-pill m-2 p-2 badge-";
    classes += count === 0 ? "success" : "danger";
    return classes;
}